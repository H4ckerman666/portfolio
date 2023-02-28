<script setup>
const props = defineProps({ name: "String" });
</script>
<template>
  <img
    :src="'/technologies/' + name + '.svg'"
    :alt="name + '-icon'"
    class="w-14 h-14"
  />
</template>
<style scoped></style>
