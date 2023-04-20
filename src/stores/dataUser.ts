import { defineStore } from "pinia";

import firebase from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import dataUser from "@/firebase/getDataUser";
const { auth } = firebase();

export const useDataUserStore = defineStore("dataUser", {
     state: () => ({
          logged: false,
          name: "",
          lastName: "",
          mail: "",
          idUser: "",
     }),
     getters: {},
     actions: {
          //checking user is logged
          checkUserIsLogged() {
               onAuthStateChanged(auth, (user) => {
                    if (user) {
                         this.$state.logged = true;
                         this.$state.idUser = auth.lastNotifiedUid;
                         this.getSimpleUserData();
                    } else {
                         this.$state.logged = false;
                    }
               });
          },
          //download simple user data if user is logged
          async getSimpleUserData() {
               try {
                    await dataUser.getDataUser(this.$state.idUser);
                    this.$state.name = dataUser.dataUser.value.name;
                    this.$state.lastName = dataUser.dataUser.value.lastName;
                    this.$state.mail = dataUser.dataUser.value.mail;
               } catch (err) {
                    console.log(err);
               }
          },
     },
});
