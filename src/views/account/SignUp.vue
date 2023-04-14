<template>
     <div class="w-full h-[calc(70vh)] flex flex-col lg:flex-row mt-32">
          <div class="w-11/12 lg:w-1/2 flex flex-col justify-center items-center mt-10">
               <form class="flex flex-col w-full sm:w-96">
                    <h1 class="text-3xl font-medium mb-6 ml-5 tracking-wide">REJESTRACJA</h1>
                    <input class="my-5 mx-4 h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none w-full" type="text" placeholder="Imię" />
                    <input class="my-5 mx-4 h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none w-full" type="text" placeholder="Nazwisko" />
                    <input class="my-5 mx-4 h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none w-full" type="text" placeholder="E-mail" />
                    <input class="my-5 mx-4 h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none w-full" type="text" placeholder="Hasło" />
                    <div class="flex items-center">
                         <input class="ml-5 mt-[2.5px] self-start checked:bg-blue-500 inline-block" type="checkbox" />
                         <label class="font-thin ml-2 text-sm" for="">Akceptuje <span class="underline cursor-pointer">politykę prywatoności</span> i <span class="underline cursor-pointer">regulamin</span></label>
                    </div>
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

<script setup lang="ts"></script>

<style scoped></style>
`ż
