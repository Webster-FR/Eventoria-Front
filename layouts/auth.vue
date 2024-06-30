<script setup lang="ts">

import LangSelector from "~/components/globals/LangSelector.vue";
</script>

<template>
  <div data-layout="auth" class="relative w-full min-h-dvh grid place-items-center">
    <LangSelector class="fixed top-0 left-1/2 -translate-x-1/2 py-3" />
    <slot />
  </div>
</template>

<style scoped>

</style>
