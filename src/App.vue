<script setup>
import AboutMe from "./components/AboutMe.vue";
import Footer from "./components/Footer.vue";
import ProjectsList from "./components/ProjectsList.vue";

const work = [
  {
    title: "Kazali",
    image: "kazali.jpg",
    type: "Front/Back development",
    description: "Property Management Application",
  },
  {
    title: "Rose",
    image: "rose.png",
    type: "Front/Back development",
    description: "Picking and packing system",
  },
  {
    title: "Flora",
    image: "flora.png",
    type: "Backend development",
    description: "Slack Bot",
  },
];
const myProjects = [
  {
    title: "Expenditure Control",
    image: "expenditure-control.png",
    type: "Front development",
    description: "Expenditure Control Application",
  },
  {
    title: "Crypto Currency Quote",
    image: "crypto-currency-quote.png",
    type: "Front development",
    description: "Crypto Currency Quote",
  },
  {
    title: "Veterinary Appointments",
    image: "veterinary-appointments.png",
    type: "Front development",
    description: "Veterinary Appointments",
  },
];
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
