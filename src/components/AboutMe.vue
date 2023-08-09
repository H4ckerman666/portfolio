<script setup>
import Social from "@/components/Social.vue";
import DownloadButton from "./DownloadButton.vue";
import ToggleButton from "./ToggleButton.vue";
import { useLanguage } from "@/stores/language";
import { computed } from "vue";

const store = useLanguage();
const introduction = computed(() => {
  return store.isEnglish
    ? `Hey! My name is Jesus. I am a FullStack developer based in Mexico. I
          have been working as a freelancer and in companies such as developer
          since 2020. I love challenges and coding to resolve them. The UI is the
          most important part for the user but at the same time is very important
          the logic behind of this, that is why i'm a FullStack Developer.`
    : `¡Hey! Mi nombre es Jesús. Soy un desarrollador FullStack con sede en México.
          He estado trabajando como freelancer y empresas como desarrollador desde 2020.
          Me encantan los desafíos y codificar para resolverlos. La UI es la parte más importante para el usuario,
          pero al mismo tiempo es importante la lógica detrás de esto, es por eso que soy un desarrollador de FullStack.`;
});
</script>
<template>
  <div class="mt-10 mb-10 lg:mb-5 mr-10 flex flex-column justify-end">
    <ToggleButton />
    <DownloadButton />
  </div>
  <div class="lg:flex flex-row mx-20 mt-15 mb-10 min-[1200px]:mx-auto">
    <div
      class="w-full sm:mx-auto lg:m-0 md:w-2/5 flex justify-center items-center mb-10"
    >
      <div class="relative">
        <img
          src="/images/me.png"
          class="shadow-xl rounded-full align-middle lg:-ml-16 max-w-[350px]"
        />
      </div>
    </div>
    <div
      class="text-sky-50 sm:w-4/5 lg:w-3/5 min-[1450px]:w-2/5 min-[1450px]:ml-5 mx-auto lg:m-20"
    >
      <h1
        class="text-3xl font-bold block font-family: ui-monospace whitespace-nowrap min-[600px]:typing"
      >
        Hello! My name is
        <span class="text-sky-500 max-[600px]:name-typing">Jesus</span>
      </h1>
      <h2 class="underline">Mid-level FullStack Developer</h2>
      <p class="mt-5 text-justify">{{ introduction }}</p>
      <Social />
    </div>
  </div>
</template>
<style scoped></style>
