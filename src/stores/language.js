import { defineStore } from "pinia";

export const useLanguage = defineStore("laguage", {
  state: () => {
    return { language: "es" };
  },
  getters: {
    getLanguage: (state) => state.language,
  },
  actions: {
    changeLanguage() {
      this.language = this.language === "en" ? "es" : "en";
    },
  },
});
