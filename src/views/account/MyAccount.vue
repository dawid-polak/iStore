<template>
     <div class="mt-20 w-full flex flex-col justify-center items-center">
          <div class="max-w-6xl w-11/12 bg-neutral-100 h-96 rounded-xl m-5 flex items-center">
               <div class="w-full lg:w1/2 text-center mt-">
                    <h1 class="text-2xl font-bold m-2">
                         <span class="text-3xl font-normal">CZEŚĆ.</span> <br />
                         Eliza Lewandowska!
                    </h1>
                    <p class="m-5 mb-0 text-2xl font-thin">Miło nam, ze nadal jesteś z nami!</p>
               </div>
          </div>
          <div class="max-w-6xl w-11/12 m-5 flex flex-wrap justify-between">
               <div class="w-full lg:w-3/12">
                    <div class="border-b h-12 flex items-center p-3 cursor-pointer font-light hover:font-bold">Moje dane</div>
                    <div class="border-b h-12 flex items-center p-3 cursor-pointer font-light hover:font-bold">Moje zamówienia</div>
                    <div class="h-12 flex items-center p-3 cursor-pointer font-light hover:font-bold">Moje zwroty</div>
               </div>
               <div class="w-full lg:w-8/12 m-2 rounded-xl">
                    <MyData />
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
import MyData from '@/components/account/MyData.vue';

</script>

<style scoped></style>
