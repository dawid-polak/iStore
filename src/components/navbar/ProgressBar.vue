<template>
    <div class="fixed absolute z-50 w-full mt-20">
        <div class="progress-bar h-2 bg-blue-600"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.progress-bar { 
    animation: loadProgress 1s forwards ease-in-out;
    width: 0;
}

@keyframes loadProgress {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
</style>