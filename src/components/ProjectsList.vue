<script setup>
import ProjectCard from "./ProjectCard.vue";
const props = defineProps({
  title: String,
  elements: Array,
  folder: String,
});
console.log("🚀 ~ file: ProjectsList.vue:8 ~ folder:", props.folder);
</script>
<template>
  <div>
    <section class="py-10 bg-gray-100">
      <h2 class="text-4xl font-bold text-center text-sky-900 mb-5">
        {{ title }}
      </h2>
      <div
        class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
      >
        <ProjectCard
          v-for="element in elements"
          :key="element.image"
          :folder="folder"
          :title="element.title"
          :image="element.image"
          :type="element.type"
          :description="element.description"
        />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
