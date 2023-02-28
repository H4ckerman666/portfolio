<script setup>
import Carousel from "./Carousel.vue";
import { work, myProjects } from "@/data/";
import { onBeforeMount, ref } from "vue";
import Icon from "./Icon.vue";

const project = ref("");

onBeforeMount(() => {
  const element = work.filter((element) => element.id === props.id);
  project.value = element[0];
  console.log("🚀 ~ file: ProjectView.vue:17 ~ props:", project.value);
});

const props = defineProps({
  id: String,
});
</script>
<template>
  <header class="font-bold text-5xl text-center mt-10">
    <h1 class="text-sky-500">
      {{ project.title }}
    </h1>
    <h4 class="mt-2 text-2xl text-sky-50">{{ project.type }}</h4>
  </header>

  <Carousel
    class="mx-5 lg:mx-40 my-10"
    :images="project.images"
    :id="project.id"
  />
  <section class="text-sky-50 mx-20 lg:mx-40 mb-10">
    <h3 class="font-bold text-4xl mt-10">About this project</h3>
    <ul class="mt-5 mx-5">
      <li v-for="a in project.longDescription" :key="a" class="list-disc">
        {{ a }}
      </li>
    </ul>
    <h3 class="font-bold text-4xl mt-10">Technologies</h3>
    <div
      class="grid max-w-xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-7"
    >
      <Icon v-for="icon in project.technologies" :key="icon" :name="icon" />
    </div>
    <p class="font-bold mt-5 text-2xl">Status</p>
    <p class="text-base">{{ project.status }}</p>
    <p class="mt-5">
      You can visit this project
      <a :href="project.link" class="text-sky-500">here</a>
    </p>
  </section>
</template>
<style scoped></style>
