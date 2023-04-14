<template>
    <div class="w-full max-w-3xl m-auto mb-[1000px]">
        <h1 class="text-4xl text-center font-bold">Który iPhone jest stworzony dla Ciebie?</h1>
        <div class="flex flex-nowrap w-full overflow-auto h-[120%]">
            <CardProduct/> 
            <CardProduct/> 
            <CardProduct/> 
            <CardProduct/> 
            <CardProduct/> 
        </div>
    </div>
</template>

<script setup lang="ts">
import CardProduct from './CardProduct.vue';
</script>

<style scoped>

</style>