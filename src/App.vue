<template>
     <Navbar />
     <RouterView></RouterView>
     <!-- <div class="test">  </div> -->
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import Navbar from "./components/navbar/Navbar.vue";
import { useDataUserStore } from "@/stores/dataUser";

//checking user is logged
onBeforeMount(() => {
     useDataUserStore().checkUserIsLogged()
})
</script>

<style scoped>
.test {
     height: 2000px;
}
</style>
