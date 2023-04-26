<template>
     <div class="min-w-[300px]">
          <img :src="data.imgMain" alt="iphone" class="p-8 h-[350px]" />
          <div class="text-center mt-3">
               <h1 class="text-xl font-light">{{ data.name }}</h1>
               <p class="flex items-center font-thin w-4/5 m-auto text-sm h-[220px]">{{ data.description }}</p>
               <div class="flex items-center justify-around my-4">
                    <p>Juz od {{ data.price }} zł</p>
                    <div class="flex items-center">
                         <img @click="store.addProductToShoppingCard(data, storeDataUser.logged)" class="w-10 h-10 mr-2 p-2 hover:bg-zinc-200 rounded-full cursor-pointer" src="../../assets/icons/add_shopping_card.svg" alt="addShoppingCard" />
                         <button class="bg-blue-600 px-3 py-1 text-sm text-white rounded-full hover:drop-shadow-xl text-center">KUP</button>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
import { useShoppingCard } from "@/stores/shoppingCard";
import { useDataUserStore } from "@/stores/dataUser";
const props = defineProps(["data"]);
const store = useShoppingCard();
const storeDataUser = useDataUserStore();

</script>

<style scoped></style>
