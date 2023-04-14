<template>
     <div class="main flex fixed h-full w-full bg-black bg-opacity-75 z-50 top-0">
          <div class="flex w-1/12 sm:w-4/12 lg:w-7/12 justify-center items-center">
               <p @click="$emit('close')" class="text-white cursor-pointer hover:border-b border-white font-thin hidden sm:block">KONTYNUUJ ZAKUPY</p>
          </div>
          <div class="shopping-card fixed bg-white h-full w-11/12 sm:w-8/12 lg:w-5/12 z-40">
               <div class="w-full flex justify-end">
                    <img @click="$emit('close')" class="m-8 w-12 h-12 cursor-pointer hover:bg-zinc-200 p-2 rounded-full" src="../assets/icons/close.svg" alt="close" />
               </div>
          </div>
     </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main {
    opacity: 0;
    animation: showMain 0.5s forwards ease-in-out;
     .shopping-card {
          right: -100%;
          animation: showShoppingCard 0.5s forwards ease-in-out;

          @keyframes showShoppingCard {
               from {
                    right: -100%;
               }

               to {
                    right: 0;
               }
          }
     }

     @keyframes showMain {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
     }
}
</style>
