<script setup lang="ts">
import ThemeSelector from "~/components/globals/ThemeSelector.vue";

const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>

<template>
  <div>
    <header>
      <ThemeSelector />
    </header>

    <slot />
  </div>
</template>

<style scoped>

</style>
