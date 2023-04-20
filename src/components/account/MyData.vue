<template>
    <div>
        <p class="font-thin text-xl mt-5 justify-start">Adres e-mail: <span class="font-bold">{{ store.mail }}</span></p>
        <form class="flex flex-col mt-2">
            <div class="flex">
                <div class="m-2">
                    <label class="ml-1" for="">Imię:</label>
                    <input class="h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none w-full" type="text" :placeholder="store.name" :value="store.name" />
                </div>
                <div class="m-2">
                    <label class="ml-1" for="">Nazwisko:</label>
                    <input class="h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none w-full" type="text" :placeholder="store.lastName" :value="store.lastName"/>
                </div>
            </div>
            <button class="bg-black rounded-full text-white px-8 py-3 font-thin drop-shadow-md border focus:border-blue-500 focus:outline-none mb-10 hover:shodow-xl w-1/2 mt-5">Zmień</button>
        </form>
        <form class="flex flex-col mt-2">
            <div class="my-3">
                <p class="font-thin text-xl">Dane adresowe:</p>
                <div class="flex flex-wrap mt-2">
                    <div class="flex flex-col m-2">
                        <label class="ml-1" for="">Ulica:</label>
                        <input class="h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none " type="text" placeholder="Główna" value="Główna" />
                    </div>
                    <div class="flex flex-col m-2">
                        <label class="ml-1" for="">Numer mieszkania:</label>
                        <input class="h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none " type="text" placeholder="6" value="6" />
                    </div>
                    <div class="flex flex-col m-2">
                        <label class="ml-1" for="">Miejscowość:</label>
                        <input class="h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none " type="text" placeholder="Wrocław" value="Wrocław" />
                    </div>
                    <div class="flex flex-col m-2">
                        <label class="ml-1" for="">Kod pocztowy:</label>
                        <input class="h-14 text-xl bg-neutral-100 p-5 rounded-lg font-thin border focus:border-blue-500 focus:outline-none " type="text" placeholder="55-432" value="55-432" />
                    </div>
                </div>
            </div>
            <button class="bg-black rounded-full text-white px-8 py-3 font-thin drop-shadow-md border focus:border-blue-500 focus:outline-none mb-10 hover:shodow-xl w-1/2 mt-5">Zmień</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useDataUserStore } from '@/stores/dataUser';
const store = useDataUserStore();

</script>

<style scoped>

</style>