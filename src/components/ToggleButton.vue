<template>
  <div class="mr-5 flex flex-row justify-between toggle">
    <label for="dark-toggle" class="flex items-center cursor-pointer">
      <div :class="esClass">Es</div>
      <div class="relative">
        <input
          type="checkbox"
          name="dark-mode"
          id="dark-toggle"
          class="checkbox hidden"
          v-model="toggleStatus"
          @click="chanceLanguage"
        />
        <div
          class="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"
        ></div>
        <div
          class="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition"
        ></div>
      </div>
      <div :class="enClass">En</div>
    </label>
  </div>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
import { useLanguage } from "@/stores/language";
const esClass = ref("mr-3 font-medium text-sky-300");
const enClass = ref("ml-3 font-medium text-white");
const toggleStatus = ref(false);

onBeforeMount(() => {
  toggleStatus.value = store.isEnglish ? true : false;
});

const store = useLanguage();
const chanceLanguage = () => {
  store.changeLanguage();
  enClass.value = store.isEnglish
    ? "ml-3 font-medium text-sky-300"
    : "ml-3 font-medium text-white";
  esClass.value = store.isEnglish
    ? "mr-3 font-medium text-white"
    : "mr-3 font-medium text-sky-300";
};
</script>
<style>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #7accf4;
}
</style>
