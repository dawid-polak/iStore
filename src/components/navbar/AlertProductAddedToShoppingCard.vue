<!-- Alert is added in Navbar component -->
<template>
     <div class="alert absolute mt-48 mx-2 right-0 sm:mr-5 flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
          <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Info</span>
          <div><span class="font-medium">Udało się!</span> Produkt dodany do koszyka!</div>
     </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.alert {
     opacity: 0;
     animation: showAlert 2s ease-in-out forwards;
}

//animation to show and hidden alert
@keyframes showAlert {
     0% {
          opacity: 0;
     }
     25% {
          opacity: 1;
     }
     50% {
          opacity: 1;
     }
     75% {
          opacity: 1;
     }
     100% {
          opacity: 0;
     }
}
</style>
