<template>
    <div class="w-48 fixed bg-white z-50 ml-8 sm:ml-20 top-16 rounded-xl drop-shadow-2xl">
        <router-link v-if="!store.logged" :to="{ name: 'login'}">
            <div class="border-b h-12 flex items-center p-3 cursor-pointer font-light hover:font-bold">Zaloguj się</div>
        </router-link>
        <router-link v-if="store.logged" :to="{ name: 'myaccount' }">
            <div class="border-b h-12 flex items-center p-3 cursor-pointer font-light hover:font-bold">Moje konto</div>
        </router-link>
        <div class="h-12 flex items-center p-3 cursor-pointer font-light hover:font-bold" :class="{'border-b': store.logged}">Ulubione</div>
        <router-link v-if="store.logged" @click="signOutUser()" :to="{ name: 'login'}">
            <div class="h-12 flex items-center p-3 cursor-pointer font-light hover:font-bold text-red-600">Wyloguj się</div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import signOutUser from '@/firebase/signOut';
import { useDataUserStore } from '@/stores/dataUser';

const store = useDataUserStore();

</script>

<style scoped>

</style>