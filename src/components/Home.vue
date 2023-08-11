<script setup>
import AboutMe from "@/components/AboutMe.vue";
import Footer from "@/components/Footer.vue";
import Courses from "@/components/Courses.vue";
import ProjectsList from "@/components/ProjectsList.vue";
import { projects } from "@/data/";
import { computed } from "vue";
import { useLanguage } from "@/stores/language";

const store = useLanguage();

const work = computed(() =>
  store.isEnglish ? projects.en.work : projects.es.work
);

const myProjects = computed(() =>
  store.isEnglish ? projects.en.owner : projects.es.owner
);

const projectsTitle = computed(() => {
  return {
    recentlyWork: store.isEnglish ? "My recently work" : "Mi trabajo reciente",
    myProjects: store.isEnglish
      ? "My personal projects"
      : "Mis proyectos personales",
  };
});
</script>
<template>
  <AboutMe />
  <ProjectsList
    :title="projectsTitle.recentlyWork"
    :elements="work"
    folder="company-projects"
  />
  <ProjectsList
    :title="projectsTitle.myProjects"
    :elements="myProjects"
    folder="my-projects"
  />
  <Courses/>
  <Footer />
</template>

<style scoped></style>
