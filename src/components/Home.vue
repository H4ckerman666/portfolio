<script setup>
import AboutMe from "@/components/AboutMe.vue";
import Footer from "@/components/Footer.vue";
import ProjectsList from "@/components/ProjectsList.vue";
import { work, myProjects } from "@/data/";
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
