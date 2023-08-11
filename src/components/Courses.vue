<script setup>
import { computed } from "vue";
import { useLanguage } from "@/stores/language";

const store = useLanguage();

const courses = [
  {
    title: "Programming Essentials in Python – Cisco Networking Academy",
    certificado: "",
  },
  {
    title: "Javascript Essentials 1 – Cisco Networking Academy",
    certificado: "",
  },
  {
    title: "Git + Github – Fernando Herrera (Udemy)",
    certificado: "git-fernando.pdf",
  },
  {
    title: "Control de versiones – Capacítate para el empleo",
    certificado: "pages.pdf",
  },
];

const evidenceText = computed(() =>
  store.isEnglish ? "See evidence" : "Ver evidencia"
);

const titleText = computed(() =>
  store.isEnglish ? "My Courses" : "Mis Cursos"
);
</script>
<template>
  <section class="py-10 bg-gray-100">
    <h2 class="text-4xl font-bold text-center text-sky-900 mb-5">
      {{ titleText }}
    </h2>
    <div class="flex">
      <ul class="inline-block w-auto m-auto">
        <li class="list-disc" v-for="item in courses">
          {{ item.title }}
          <a
            v-if="item.certificado"
            class="text-sky-500"
            :href="'/certificate/' + item.certificado"
            target="_blank"
            >- {{ evidenceText }}</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped></style>
