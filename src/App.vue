<template>
  <Navbar />
  <RouterView></RouterView>
  <!-- <div class="test">  </div> -->
</template>

<script setup lang="ts">
import Navbar from './components/navbar/Navbar.vue';
import ShoppingCard from './components/navbar/ShoppingCard.vue'

</script>

<style scoped>

.test {
  height: 2000px;
}

</style>