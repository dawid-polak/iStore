<template>
    <div class="searching flex flex-col fixed h-full w-full bg-black bg-opacity-75 z-50">
        <div class="input fixed bg-white h-2/5 w-full z-40">
             <div class="w-full flex justify-end">
                  <img @click="$emit('close')" class="m-8 sm:m-10 w-12 h-12 cursor-pointer hover:bg-zinc-200 p-2 rounded-full" src="../assets/icons/close.svg" alt="close"/>
             </div>
             <input class="m-10 text-2xl sm:text-5xl lg:text-7xl placeholder:text-zinc-300 focus focus:outline-none" type="text" placeholder="Start searching..." autofocus>
        </div>
     </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.searching {

    opacity: 0;
    animation: showSearching 0.5s ease-in-out forwards 0.2s;

    .input { 
        top: -100%;
        animation: showInput 0.5s ease-in-out forwards;

        @keyframes showInput {
            from {
                top: -100%;
            }
            to {
                top: 0;
            }
        }
    }


    @keyframes showSearching {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
}



</style>