<!-- ProductShoppingCard is added in ShoppinCard component -->
<template>
     <div class="flex w-full justify-center items-cneter border-b my-5 pb-5">
          <img class="w-16 h-full sm:w-20 mx-2 sm:mx-5 m-auto pl-2" :src="data.img" :alt="data.name" />
          <div class="flex flex-col justify-center ml-3">
               <h1 class="font-thin sm:text-xl w-[150px]">{{ data.name }}</h1>
               <span class="mt-1">{{ data.price }} zł</span>
               <div class="flex mt-3">
                    <span @click="storeShoppinCard.removeNumberProduct(data.id)" class="flex items-center justify-center w-8 h-8 cursor-pointer bg-zinc-100 hover:bg-zinc-200 p-1 rounded-full"> - </span>
                    <p class="flex items-center justify-center w-8 h-8 font-medium">{{  data.numberOfProduct }}</p>
                    <span @click="storeShoppinCard.addNumberProduct(data.id)" class="flex items-center justify-center w-8 h-8 cursor-pointer bg-zinc-100 hover:bg-zinc-200 p-1 rounded-full"> + </span>
               </div>
          </div>
          <div @click="storeShoppinCard.removeProductFromShoppingCard(data.id)" class="flex items-center justify-center mx-3 w-[100px] sm:ml-10 hover:underline cursor-pointer text-red-500 font-normal tracking-widest font-thin">usuń</div>
     </div>
</template>

<script setup lang="ts">
import { useShoppingCard } from '@/stores/shoppingCard';
const props = defineProps(['data'])
const storeShoppinCard = useShoppingCard();


</script>

<style scoped></style>
