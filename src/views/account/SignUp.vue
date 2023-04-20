<template>
     <div class="w-full h-[calc(70vh)] flex flex-col lg:flex-row mt-32">
          <div class="w-11/12 lg:w-1/2 flex flex-col justify-center items-center mt-10">
               <form @submit.prevent="saveUser()" class="flex flex-col w-full sm:w-96">
                    <h1 class="text-3xl font-medium mb-6 ml-5 tracking-wide">REJESTRACJA</h1>

                    <input
                         v-model="name"
                         @keyup="validForm('name')"
                         :class="{ 'border-red-500': errorName.active, 'focus:border-red-500': errorName.active }"
                         class="my-5 mx-4 h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none w-full"
                         type="text"
                         placeholder="Imię"
                         required />
                    <span v-if="errorName.active" class="ml-5 text-xs text-red-500 mt-[-10px]">{{ errorName.message }}</span>

                    <input
                         @keyup="validForm('lastname')"
                         v-model="lastName"
                         :class="{ 'border-red-500': errorLastName.active, 'focus:border-red-500': errorLastName.active }"
                         class="my-5 mx-4 h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none w-full"
                         type="text"
                         placeholder="Nazwisko"
                         required />
                    <span v-if="errorLastName.active" class="ml-5 text-xs text-red-500 mt-[-10px]">{{ errorLastName.message }}</span>

                    <input
                         @keyup="validForm('mail')"
                         v-model="mail"
                         :class="{ 'border-red-500': errorMail.active, 'focus:border-red-500': errorMail.active }"
                         class="my-5 mx-4 h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none w-full"
                         type="text"
                         placeholder="E-mail"
                         required />
                    <span v-if="errorMail.active" class="ml-5 text-xs text-red-500 mt-[-10px]">{{ errorMail.message }}</span>

                    <input
                         @keyup="validForm('password')"
                         v-model="password"
                         :class="{ 'border-red-500': errorPassword.active, 'focus:border-red-500': errorPassword.active }"
                         class="my-5 mx-4 h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none w-full"
                         type="password"
                         placeholder="Hasło"
                         required />
                    <span v-if="errorPassword.active" class="ml-5 text-xs text-red-500 mt-[-10px]">{{ errorPassword.message }}</span>
                    <div class="flex items-center">
                         <input v-model="policy" class="ml-5 mt-[2.5px] self-start checked:bg-blue-500 inline-block" type="checkbox" required />
                         <label class="font-thin ml-2 text-sm" for="">Akceptuje <span class="underline cursor-pointer">politykę prywatoności</span> i <span class="underline cursor-pointer">regulamin</span></label>
                    </div>
                    <span v-if="errorFromServer.active" class="ml-5 text-xs text-red-500 mt-5 mb-[-5px]">{{ errorFromServer.message }}</span>
                    <div class="flex justify-between items-center mt-5">
                         <button class="bg-black rounded-full text-white px-8 py-3 font-thin ml-5 drop-shadow-md border focus:border-blue-500 focus:outline-none">zarejestruj się</button>
                    </div>
               </form>
          </div>
          <div class="w-full lg:w-1/2 flex items-center justify-center mt-10">
               <div class="bg-neutral-100 w-full lg:w-4/5 sm:h-96 rounded-md flex flex-col justify-center items-center">
                    <h1 class="mb-10 mt-10 text-3xl font-thin tracking-wide text-center">Masz juz konto?</h1>
                    <router-link :to="{ name: 'login' }">
                         <button class="bg-black rounded-full text-white px-8 py-3 font-thin drop-shadow-md border focus:border-blue-500 focus:outline-none mb-10">Zaloguj się</button>
                    </router-link>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import signUp from "@/firebase/signUp";
import ProgressBar from "@/composable/progressBar";

const name = ref("");
const lastName = ref("");
const mail = ref("");
const password = ref("");
const policy = ref(false);
const checkData = ref(false);
const router = useRouter();

const errorName = ref({
     active: false,
     message: "",
});
const errorLastName = ref({
     active: false,
     message: "",
});
const errorMail = ref({
     active: false,
     message: "",
});
const errorPassword = ref({
     active: false,
     message: "",
});

const errorFromServer = ref({
     active: false,
     message: "",
});

//form validator
const validForm = (el: string) => {
     switch (el) {
          case "name":
               //valid name
               if (name.value.length <= 2) {
                    errorName.value.active = true;
                    errorName.value.message = "Imię powinno zawierać więcj niz 2 znaki";
                    return (checkData.value = true);
               } else if (name.value.charCodeAt(0) > 97) {
                    errorName.value.active = true;
                    errorName.value.message = "Imię powinno rozpoczynać się z wielkiej liery";
                    return (checkData.value = false);
               } else {
                    errorName.value.active = false;
                    errorName.value.message = "";
                    return (checkData.value = true);
               }
               break;
          case "lastname":
               //valid lastname
               if (lastName.value.length <= 2) {
                    errorLastName.value.active = true;
                    errorLastName.value.message = "Nazwisko powinno zawierać więcj niz 2 znaki";
                    return (checkData.value = false);
               } else if (lastName.value.charCodeAt(0) > 97) {
                    errorLastName.value.active = true;
                    errorLastName.value.message = "Nazwisko powinno rozpoczynać się z wielkiej liery";
                    return (checkData.value = false);
               } else {
                    errorLastName.value.active = false;
                    errorLastName.value.message = "";
                    return (checkData.value = true);
               }
               break;
          case "mail":
               //valid mail
               if (mail.value.length <= 5) {
                    errorMail.value.active = true;
                    errorMail.value.message = "Adres e-mail powinno zawierać więcj niz 5 znaki";
                    return (checkData.value = false);
               } else if (!mail.value.includes("@")) {
                    errorMail.value.active = true;
                    errorMail.value.message = "Adres e-mail powinien zawierać znak @";
                    return (checkData.value = false);
               } else {
                    errorMail.value.active = false;
                    errorMail.value.message = "";
                    return (checkData.value = true);
               }
               break;
          case "password":
               //valid password
               if (password.value.length <= 7) {
                    errorPassword.value.active = true;
                    errorPassword.value.message = "Hasło powinno zawierać przynajmniej 7 znaków";
                    return (checkData.value = false);
               } else {
                    errorPassword.value.active = false;
                    errorPassword.value.message = "";
                    return (checkData.value = true);
               }
               break;
          default:
               break;
     }
};

//save user in database
const saveUser = async () => {
     //data user
     const user = {
          name: name.value,
          lastName: lastName.value,
          mail: mail.value,
          password: password.value,
          policy: policy.value,
     };

     //check all input value are correctly
     if (errorName.value.active == false || errorLastName.value.active == false || errorMail.value.active == false || errorPassword.value.active == false) {
          try {
               //send data
               const { error } = await signUp(user);

               //check the meesage to server was success sended
               if (error) {
                    //valid error user exist | weak password | something is wrong
                    if (error == "auth/email-already-in-use") {
                         errorFromServer.value.active = true;
                         errorFromServer.value.message = "Podany uzytkownik juz istnieje";
                    } else if (error == "auth/weak-password") {
                         errorFromServer.value.active = true;
                         errorFromServer.value.message = "Twoje hasło powinno być mocniejsze";
                    } else {
                         errorFromServer.value.active = true;
                         errorFromServer.value.message = "Coś poszło nie tak, spróbuj ponownie";
                    }
               } else {
                    //remove error
                    errorFromServer.value.active = false;
                    errorFromServer.value.message = "";

                    //show progress bar
                    ProgressBar.progressBar();

                    //go to home after the progressbar will finished
                    setTimeout(() => {
                         router.push({ name: "home" });
                    }, 1000);
               }

               //reset value from form
               name.value = "";
               lastName.value = "";
               mail.value = "";
               password.value = "";
               policy.value = false;
          } catch (err) {
               console.log("UPSSSS");
          }
     } else {
          // if any value isn't valid
          errorFromServer.value.active = true;
          errorFromServer.value.message = "Wypełnij prawidłowo pola";
     }
};
</script>
<style scoped lang="scss"></style>
