<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>

<template>
  <div>
    <header class="w-full flex justify-between">
      <div class="flex gap-3 items-center">
        <NuxtLink :to="localePath('/')">{{ $t('pages.home') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')">{{ $t('pages.about') }}</NuxtLink>
      </div>
      <div class="flex gap-3 items-center">
        <NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink>
        <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
      </div>
    </header>

    <slot />
  </div>
</template>

<style scoped>

</style>
