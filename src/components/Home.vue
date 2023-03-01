<script setup>
import AboutMe from "@/components/AboutMe.vue";
import Footer from "@/components/Footer.vue";
import ProjectsList from "@/components/ProjectsList.vue";
import { projects } from "@/data/";

const work = projects.filter((element) => element.id.includes("w"));
console.log("🚀 ~ file: Home.vue:8 ~ work:", work);
const myProjects = projects.filter((element) => element.id.includes("m"));
</script>
<template>
  <AboutMe />
  <ProjectsList
    title="My recently work"
    :elements="work"
    folder="company-projects"
  />
  <ProjectsList
    title="My personal projects"
    :elements="myProjects"
    folder="my-projects"
  />
  <Footer />
</template>

<style scoped></style>
