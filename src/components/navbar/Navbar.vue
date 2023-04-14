<template>
     <div class="w-full flex items-center h-20 border-gray-300 border-b fixed bg-white top-0 z-40">
          <div class="grow ml-5 sm:ml-16 flex items-center">
               <img @click="activeAccountMenu = !activeAccountMenu" class="w-10 h-10 mr-2 cursor-pointer p-2 rounded-full" :class="{'bg-zinc-200':activeAccountMenu}" src="../../assets/icons/person.svg" alt="person" />
               <router-link :to="{ name: 'login' }">
                    <p class="text-xs mt-1 font-extralight cursor-pointer hover:underline border-gray-950 hidden sm:block">ZALOGUJ SIĘ</p>
               </router-link>
          </div>
          <div class="grow-0">
               <router-link :to="{ name: 'home' }">
                    <img class="h-10 cursor-pointer" src="../../assets/images/logo.png" alt="logo" />
               </router-link>
          </div>
          <div class="grow justify-items-end">
               <div class="flex h-full items-center justify-end mr-5 sm:mr-16">
                    <img @click="activeSearching = !activeSearching" class="w-10 h-10 sm:mr-2 cursor-pointer hover:bg-zinc-200 p-2 rounded-full" src="../../assets/icons/search.svg" alt="search" />
                    <div class="flex">
                         <img @click="activeShoppingCard = !activeShoppingCard" class="w-10 h-10 cursor-pointer hover:bg-zinc-200 p-2 rounded-full" src="../../assets/icons/shopping_cart.svg" alt="shopping_cart" />
                         <span class="bg-black w-4 h-4 text-white rounded-full text-[10px] flex justify-center items-center ml-[-15px] mt-[3px]">5</span>
                    </div>
               </div>
          </div>
     </div>
     <AccountMenu v-if="activeAccountMenu" @click="activeAccountMenu = !activeAccountMenu"/>
     <ShoppingCard v-if="activeShoppingCard" @close="activeShoppingCard = !activeShoppingCard" />
     <Searching v-if="activeSearching" @close="activeSearching = !activeSearching" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ShoppingCard from "./ShoppingCard.vue";
import Searching from "./Searching.vue";
import AccountMenu from "./AccountMenu.vue";

const activeShoppingCard = ref(false);
const activeSearching = ref(false);
const activeAccountMenu = ref(false);
</script>

<style scoped lang="scss"></style>
