<script setup>
import Carousel from "./Carousel.vue";
import BackButton from "./BackButton.vue";
import { projects } from "@/data/";
import { onBeforeMount, ref } from "vue";
import Icon from "./Icon.vue";

const props = defineProps({
  id: String,
});
const project = ref("");

onBeforeMount(() => {
  const element = projects.filter((element) => element.id === props.id);
  project.value = element[0];
});
</script>
<template>
  <BackButton class="ml-20 mt-5"/>
  <header class="font-bold text-5xl text-center">
    <h1 class="text-sky-500">
      {{ project.title }}
    </h1>
    <h4 class="mt-2 text-2xl text-sky-50">{{ project.type }}</h4>
  </header>

  <Carousel
    class="mx-5 lg:mx-40 my-10"
    :images="project.images"
    :projectId="project.id"
  />
  <main class="text-sky-50 mx-10 lg:mx-40 mb-10">
    <section class="md:grid grid-template justify-center gap-9 p-6 mx-auto">
      <div>
        <h3 class="font-bold text-3xl">About this project</h3>
        <ul class="mt-5 mx-5">
          <li v-for="a in project.longDescription" :key="a" class="list-disc">
            {{ a }}
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-2 gap-5 mt-5 md:mt-0">
        <div>
          <h3 class="font-bold text-3xl">Status</h3>
          <p class="text-base">{{ project.status }}</p>
          <p v-if="project.link !== ''" class="mt-5">
            Visit
            <a :href="project.link" class="text-sky-500">here</a>
          </p>
        </div>
        <div>
          <h3 class="font-bold text-3xl">App language</h3>
          <p class="mt-5">
            {{ project.language }}
          </p>
        </div>
      </div>
    </section>
    <div>
      <h3 class="font-bold text-3xl mt-5 text-center">Technologies</h3>
      <div class="flex flex-wrap justify-around mt-5 lg:max-w-4xl mx-auto">
        <Icon
          v-for="icon in project.technologies"
          :key="icon"
          :name="icon"
          class="m-5"
        />
      </div>
    </div>
    <div v-if="project.repository !== ''" class="mt-14">
      <h3 class="font-bold mt-5 text-3xl text-center">GitHub repository</h3>
      <p class="mt-5 text-center">
        You can check the source code
        <a :href="project.repository" class="text-sky-500">here</a>
      </p>
    </div>
  </main>
</template>
<style scoped>
.grid-template {
  grid-template-columns: 40% 40%;
}
</style>
