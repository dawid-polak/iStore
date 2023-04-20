<template>
     <div class="w-full max-w-3xl m-auto mb-[1000px]">
          <h1 class="text-4xl text-center font-bold">Który iPhone jest stworzony dla Ciebie?</h1>
          <div class="flex flex-nowrap w-full overflow-auto h-[120%]">
               <CardProduct v-for="iphone in iphones" :key="iphone" :data="iphone"/>
               <div v-if="errorMessage.active" class="text-center w-full my-20 mx-5 font-thin">
                    coś poszło nie tak... <br />
                    spróbuj załodwać stronę jeszcze raz <br />

                    <span class="font-bold">Błąd typu: {{ errorMessage.message }}</span>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardProduct from "./CardProduct.vue";
import getProducts from "@/firebase/getProducts";

//object with iphones
const iphones = ref();

//error message
const errorMessage = ref({
     active: false,
     message: "",
});

//handle download iphones form db
const getIphones = async () => {
     // get iphones from db
     const { data, error } = await getProducts("iphones");
     iphones.value = data;

     //if somethink is wrong write error
     if (error) {
          errorMessage.value.active = true;
          errorMessage.value.message = error.message;
          return;
     }
};
getIphones();
</script>

<style scoped></style>
