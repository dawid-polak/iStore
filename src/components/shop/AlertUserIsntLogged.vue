<template>
     <div class="fixed z-50 w-full h-screen bg-black bg-opacity-75 flex items-center justify-center top-0">
          <div class="w-11/12 sm:w-1/2  bg-white rounded-xl flex flex-col items-center">
               <div class="w-full flex justify-end h-1/5">
                    <img @click="$emit('close')" class="m-8 w-12 h-12 cursor-pointer hover:bg-zinc-200 p-2 rounded-full" src="../../assets/icons/close.svg" alt="close" />
               </div>
               <div class="h-4/5 flex flex-col items-center justify-center">
                   <h1 class="text-center text-2xl font-thin px-5">Aby dodać produkt do koszyka zaloguj się!</h1>
                   <router-link :to="{ name: 'login' }" @click="$emit('close')">
                        <button class="bg-black rounded-full text-white px-8 py-3 font-thin drop-shadow-md border focus:border-blue-500 focus:outline-none my-10">Zaloguj się</button>
                   </router-link>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
