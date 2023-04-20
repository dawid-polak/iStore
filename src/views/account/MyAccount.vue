<template>
     <div class="mt-20 w-full flex flex-col justify-center items-center">
          <div class="max-w-6xl w-11/12 h-96 rounded-xl m-5 flex items-center"> 
               <img class="absolute z-[-100] max-w-6xl w-11/12 h-96" src="../../assets/images/accountBG.svg" alt="">
               <div class="w-full lg:w1/2 text-center">
                    <h1 class="text-2xl font-bold m-2">
                         <span class="text-3xl font-normal">CZEŚĆ</span> <br />
                         {{ store.name }} {{ store.lastName }}
                    </h1>
                    <p class="m-5 mb-0 text-2xl font-thin">Miło nam, ze nadal jesteś z nami!</p>
               </div>
          </div>
          <div class="max-w-6xl w-11/12 m-5 flex flex-wrap justify-between">
               <div class="w-full lg:w-3/12">
                    <div @click="selectSection('mydata')" :class="{ 'font-bold': showMyData, 'font-light': !showMyData }" class="border-b h-12 flex items-center p-3 cursor-pointer hover:font-bold">Moje dane</div>
                    <div @click="selectSection('myorders')" :class="{ 'font-bold': showMyOrders, 'font-light': !showMyOrders }" class="border-b h-12 flex items-center p-3 cursor-pointer hover:font-bold">Moje zamówienia</div>
                    <div @click="selectSection('myreturns')" :class="{ 'font-bold': showMyReturns, 'font-light': !showMyReturns }" class="h-12 flex items-center p-3 cursor-pointer hover:font-bold">Moje zwroty</div>
               </div>
               <div class="w-full lg:w-8/12 rounded-xl">
                    <MyData v-if="showMyData" />
                    <MyOrders v-if="showMyOrders" />
                    <MyReturns v-if="showMyReturns" />
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import MyData from "@/components/account/MyData.vue";
import MyOrders from "@/components/account/MyOrders.vue";
import MyReturns from "@/components/account/MyReturns.vue";
import { useDataUserStore } from "@/stores/dataUser";
import { onAuthStateChanged } from "firebase/auth";
import firebase from "@/firebase/config";

const store = useDataUserStore();
const router = useRouter();
const { auth } = firebase();

onMounted(() => {
     onAuthStateChanged(auth, (user) => {
          if (user) {
               return;
          } else {
               router.push({ name: "home" });
          }
     });
});

const showMyData = ref(false);
const showMyOrders = ref(false);
const showMyReturns = ref(false);

const selectSection = (section: String) => {
     switch (section) {
          case "mydata":
               showMyData.value = true;
               showMyOrders.value = false;
               showMyReturns.value = false;
               break;
          case "myorders":
               showMyData.value = false;
               showMyOrders.value = true;
               showMyReturns.value = false;
               break;
          case "myreturns":
               showMyData.value = false;
               showMyOrders.value = false;
               showMyReturns.value = true;
               break;

          default:
               break;
     }
};
</script>

<style scoped></style>
