<script setup lang="ts">
import {useSwitchLocalePath} from "#i18n";
import {Button} from "~/components/ui/button";

const switchLocale = useSwitchLocalePath();
</script>

<template>
  <div class="flex">
    <Button variant="link" class="p-3" as-child>
      <NuxtLink :to="switchLocale('fr')" data-lang-link active-class="active">FR</NuxtLink>
    </Button>
    <Button variant="link" class="p-3" as-child>
      <NuxtLink :to="switchLocale('en')" data-lang-link active-class="active">EN</NuxtLink>
    </Button>
  </div>
</template>

<style scoped lang="sass">
[data-lang-link]
  &.active
    @apply underline
</style>
