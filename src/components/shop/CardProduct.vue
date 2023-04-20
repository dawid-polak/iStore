<template>
     <div class="min-w-[300px]">
          <img :src="data.imgMain" alt="iphone" class="p-8" />
          <div class="text-center mt-3">
               <h1 class="text-xl font-light">{{ data.name }}</h1>
               <p class="font-thin w-4/5 m-auto text-sm">{{ data.description }}</p>
               <div class="flex items-center justify-around my-4">
                    <p>Juz od {{ data.price }} zł</p>
                    <div class="flex items-center">
                         <img @click="addToShoppingCard(data.id)" class="w-10 h-10 mr-2 p-2 hover:bg-zinc-200 rounded-full cursor-pointer" src="../../assets/icons/add_shopping_card.svg" alt="addShoppingCard" />
                         <button class="bg-blue-600 px-3 py-1 text-sm text-white rounded-full hover:drop-shadow-xl text-center">KUP</button>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
import { useShoppingCard } from "@/stores/shoppingCard";
const props = defineProps(["data"]);
const store = useShoppingCard();

//add product to shopping card
function addToShoppingCard(productId: string) {
     //check the product exist in the idProducts
     if (store.idProducts.includes(productId)) {
          //if product exist add one to numberOfProduct
          store.cardProducts.map((product) => {
               product.numberOfProducts++ as Number;
          });
     } else {
          //add id product to idProducts
          store.idProducts.push(productId);

          //add product to cardProducts
          store.cardProducts.push({
               id: productId,
               numberOfProducts: 1,
          });
     }
};
</script>

<style scoped></style>
