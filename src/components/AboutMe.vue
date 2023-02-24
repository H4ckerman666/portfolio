<script setup>
import Social from "../components/Social.vue";
</script>
<template>
  <div class="lg:flex flex-row m-20 min-[1200px]:mx-auto">
    <div
      class="w-full sm:mx-auto lg:m-0 md:w-2/5 flex justify-center items-center mb-10"
    >
      <div class="relative">
        <img
          src="/images/Yisus.jpg"
          class="shadow-xl rounded-full align-middle lg:-ml-16 max-w-[350px]"
        />
      </div>
    </div>
    <div
      class="text-sky-50 sm:w-4/5 lg:w-3/5 min-[1450px]:w-2/5 min-[1450px]:ml-5 mx-auto lg:m-20"
    >
      <h1
        class="text-3xl font-bold block font-family: ui-monospace whitespace-nowrap"
      >
        Hello! My name is <span class="text-sky-500">Jesus</span>
      </h1>
      <h2 class="underline">Mid-level FullStack Developer</h2>
      <p class="mt-5 text-justify">
        Hey! My name is Jesus. I am a back & font designer based in Mexico. I
        have been working as a freelance and in companies such as developer
        since 2020. I love challenges and coding to resolve them. The UI is the
        most important part for the user but at the same time is very important
        the logic behind of this, that is why i'm a FullStack Developer.
      </p>
      <Social />
    </div>
  </div>
</template>
<style scoped>
@media (max-width: 600px) {
  span {
    display: block;
    font-family: monospace;
    white-space: nowrap;
    border-right: 4px solid;
    width: 6ch;
    animation: typing 1.5s steps(6), blink 0.5s infinite step-end alternate;
    animation-iteration-count: infinite;
    overflow: hidden;
  }
}
@media (min-width: 601px) {
  h1 {
    display: block;
    font-family: monospace;
    white-space: nowrap;
    border-right: 4px solid;
    width: 24ch;
    animation: typing 3s steps(24), blink 0.5s infinite step-end alternate;
    animation-iteration-count: infinite;
    overflow: hidden;
  }
}
@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
