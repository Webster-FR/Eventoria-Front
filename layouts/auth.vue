<script setup lang="ts">
import LangSelector from "~/components/globals/LangSelector.vue";
</script>

<template>
  <div data-layout="auth" class="relative w-full min-h-dvh flex flex-col justify-start items-center lg:justify-center">
    <div class="py-3 lg:fixed lg:top-0 lg:left-1/2 lg:-translate-x-1/2"><LangSelector /></div>
    <slot />
  </div>
</template>

<style scoped>

</style>
