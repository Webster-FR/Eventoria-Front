<script setup lang="ts">
import {Button} from "@/components/ui/button";
import {useLocalePath} from "#i18n";

defineProps<{
  mobile?: boolean;
}>();
const localePath = useLocalePath();
</script>

<template>
  <Button :class="{ mobile }" variant="ghost" as-child>
    <NuxtLink :to="localePath('/')">{{ $t("navigation.links.explore") }}</NuxtLink>
  </Button>
  <Button :class="{ mobile }" variant="ghost" as-child>
    <NuxtLink :to="localePath('/')">{{ $t("navigation.links.pricing") }}</NuxtLink>
  </Button>
  <Button :class="{ mobile }" variant="ghost" as-child>
    <NuxtLink :to="localePath('/')">{{ $t("navigation.links.about") }}</NuxtLink>
  </Button>
</template>

<style scoped lang="sass">
.mobile
  @apply justify-start
</style>
