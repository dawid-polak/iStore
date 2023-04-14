<template>
     <div class="w-full h-[calc(70vh)] flex flex-col lg:flex-row mt-32">
          <div class="w-11/12 lg:w-1/2 flex flex-col justify-center items-center mt-10">
               <form class="flex flex-col w-full sm:w-96">
                    <h1 class="text-3xl font-medium mb-6 ml-5 tracking-wide">LOGOWANIE</h1>
                    <input class="my-5 mx-4 h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none w-full" type="text" placeholder="E-mail" />
                    <input class="my-5 mx-4 h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none w-full" type="text" placeholder="Hasło" />
                    <div class="flex justify-between items-center mt-5">
                         <button class="bg-black rounded-full text-white px-8 py-3 font-thin ml-5 drop-shadow-md border focus:border-blue-500 focus:outline-none">zaloguj się</button>
                         <router-link :to="{ name: 'changepassword' }">
                              <p class="font-thin text-sm underline cursor-pointer text-right">ZAPOMNIAŁEŚ HASŁA?</p>
                         </router-link>
                    </div>
               </form>
          </div>
          <div class="w-full lg:w-1/2 flex items-center justify-center mt-10">
               <div class="bg-neutral-100 w-full lg:w-4/5 sm:h-96 rounded-md flex flex-col justify-center items-center">
                    <h1 class="mb-10 mt-10 text-3xl font-thin tracking-wide text-center">Nie masz jeszcze konta?</h1>
                    <router-link :to="{ name: 'signup' }">
                         <button class="bg-black rounded-full text-white px-8 py-3 font-thin drop-shadow-md border focus:border-blue-500 focus:outline-none mb-10">Zarejestruj się</button>
                    </router-link>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
