<template>
    <div class="relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
        <div class="relative z-30 p-5 text-6xl font-bold text-white bg-opacity-50 rounded-xl">
            Poza skalą.
        </div>
        <div class="text-white z-30 underline tracking-wide cursor-pointer hover:tracking-widest">
            Poznaj naszą ofertę!
        </div>
        <video class="video absolute z-10 w-auto min-w-full min-h-full max-w-none" autoplay muted loop playsinline>
             <source src="../../assets/videos/movie.mp4" type="video/mp4" />
             Your browser does not support HTML5 video.
        </video>
    </div>
    <Iphones />
</template>

<script setup lang="ts">
import Iphones from '@/components/shop/Iphones.vue';

</script>

<style scoped lang="scss">


</style>
