<script setup>
import Carousel from "./Carousel.vue";
import BackButton from "./BackButton.vue";
import { projects } from "@/data/";
import { onBeforeMount, ref, computed } from "vue";
import Icon from "./Icon.vue";
import { useLanguage } from "@/stores/language";

const store = useLanguage();

const props = defineProps({
  id: String,
});
const project = ref("");

onBeforeMount(() => {
  const id = props.id;
  const type = id.includes("m") ? "owner" : "work";
  const elements = store.isEnglish ? projects.en[type] : projects.es[type];
  project.value = elements.filter((element) => element.id === id)[0];
});

const statusClass = computed(() => {
  return ["Public", "Publico"].includes(project.value.status)
    ? "text-base mt-3 ml-3 text-green-500"
    : "text-base mt-3 ml-3 text-red-500";
});
const projectText = {
  technologies: store.isEnglish ? "Technologies" : "Tecnologías",
  about: store.isEnglish ? "About this project" : "Acerca del proyecto",
  status: store.isEnglish ? "Status" : "Estado",
  language: store.isEnglish ? "App language" : "Lenguaje",
  repositoryTitle: store.isEnglish
    ? "GitHub repository"
    : "Repositorio en GitHub",
  repositoryDescription: store.isEnglish
    ? "You can check the source code"
    : "Puedes revisar el código fuente",
  here: store.isEnglish ? "here" : "aquí",
  visit: store.isEnglish ? "Visit" : "Visitalo",
};
</script>
<template>
  <BackButton class="md:ml-20 mt-5" />
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
    <div class="m-0 md:mb-10">
      <h3 class="font-bold text-3xl mt-5 text-center">
        {{ projectText.technologies }}
      </h3>
      <div class="flex flex-wrap justify-around mt-5 lg:max-w-4xl mx-auto">
        <Icon
          v-for="icon in project.technologies"
          :key="icon"
          :name="icon"
          class="m-5"
        />
      </div>
    </div>
    <section class="md:grid grid-template justify-center gap-9 p-6 mx-auto">
      <div>
        <h3 class="font-bold text-3xl">{{ projectText.about }}</h3>
        <ul class="mt-5 mx-5">
          <li v-for="a in project.longDescription" :key="a" class="list-disc">
            {{ a }}
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-2 gap-5 mt-5 md:mt-0">
        <div>
          <h3 class="font-bold text-3xl">{{ projectText.status }}</h3>
          <p :class="statusClass">{{ project.status }}</p>
          <p v-if="project.link !== ''" class="mt-2 ml-3">
            {{ projectText.visit }}
            <a :href="project.link" class="text-sky-500"
              >{{ projectText.here }} </a
            >!
          </p>
        </div>
        <div>
          <h3 class="font-bold text-3xl">{{ projectText.language }}</h3>
          <p class="mt-5 ml-3">
            {{ project.language }}
          </p>
        </div>
      </div>
    </section>
    <div v-if="project.repository !== ''" class="mt-14">
      <h3 class="font-bold mt-5 text-3xl text-center">
        {{ projectText.repositoryTitle }}
      </h3>
      <p class="mt-5 text-center">
        {{ projectText.repositoryDescription }}
        <a :href="project.repository" class="text-sky-500">{{
          projectText.here
        }}</a>
      </p>
    </div>
  </main>
</template>
<style scoped>
.grid-template {
  grid-template-columns: 40% 40%;
}
</style>
