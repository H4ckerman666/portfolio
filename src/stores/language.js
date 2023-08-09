import { defineStore } from "pinia";

export const useLanguage = defineStore("laguage", {
  state: () => ({ language: "es" }),
  getters: {
    isEnglish: (state) => (state.language === "en" ? true : false),
  },
  actions: {
    changeLanguage() {
      this.language = this.language === "en" ? "es" : "en";
    },
  },
});
