<template>
    <div class="w-48 fixed bg-white z-50 ml-8 sm:ml-20 top-16 rounded-xl drop-shadow-2xl">
        <router-link :to="{ name: 'myaccount' }">
            <div class="border-b h-12 flex items-center p-3 cursor-pointer font-light hover:font-bold">Moje konto</div>
        </router-link>
        <div class="border-b h-12 flex items-center p-3 cursor-pointer font-light hover:font-bold">Ulubione</div>
        <div class="h-12 flex items-center p-3 cursor-pointer font-light hover:font-bold">Moje zakupy</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>