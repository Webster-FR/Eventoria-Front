<script setup lang="ts">
const colorMode = useColorMode();

const theme = computed(_ => {
  switch (colorMode.preference) {
    case 'system':
      return window?.matchMedia('[preferred-color-scheme: dark]') ? 'dark' : 'light';
    default:
      return colorMode.preference;
  }
});
</script>

<template>
  <button @click="colorMode.preference = theme === 'light' ? 'dark' : 'light'">{{ theme }}</button>
</template>

<style scoped>

</style>
