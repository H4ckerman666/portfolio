<script setup>
import Carousel from "./Carousel.vue";

const props = defineProps({
  id: String,
});
console.log("🚀 ~ file: ProjectView.vue:5 ~ id:", props.id);
</script>
<template>
  <Carousel />
</template>
<style scoped></style>
