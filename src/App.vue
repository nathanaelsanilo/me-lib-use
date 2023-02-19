<script setup lang="ts">
import { ping } from "@peachfull/me-npm";
import { onMounted } from "vue";

onMounted(() => {
  console.log(ping());
});
</script>

<template>
  <main class="">
    <me-button>me ui button</me-button>
  </main>
</template>

<style scoped></style>
