<script setup></script>
<template>
  <router-link :to="{ name: 'dashboard' }" class="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-narrow-left"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#ffffff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="5" y1="12" x2="9" y2="16" />
      <line x1="5" y1="12" x2="9" y2="8" />
    </svg>
    <span>Back</span>
  </router-link>
</template>
<style scoped>
.button {
  display: flex;
  height: 3em;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  letter-spacing: 1px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: none;
  color: #fff;
}

.button > svg {
  margin-right: 5px;
  margin-left: 5px;
  font-size: 20px;
  color: #fff;
  transition: all 0.4s ease-in;
}

.button:hover > svg {
  font-size: 1.2em;
  transform: translateX(-5px);
}

.button:hover {
  transform: translateY(-2px);
}
</style>
