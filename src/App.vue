<template>
     <Navbar />
     <RouterView></RouterView>
     <AlertUserIsntLogged v-if="useShoppingCard().showAlertLogged" @close="useShoppingCard().showAlertLogged = !useShoppingCard().showAlertLogged"/>
     <!-- <div class="test">  </div> -->
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import Navbar from "./components/navbar/Navbar.vue";
import AlertUserIsntLogged from "./components/shop/AlertUserIsntLogged.vue";
import { useDataUserStore } from "@/stores/dataUser";
import { useShoppingCard } from '@/stores/shoppingCard';

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
