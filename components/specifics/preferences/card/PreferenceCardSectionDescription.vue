<script setup lang="ts">
defineProps<{
  danger?: boolean;
}>();
</script>

<template>
  <p class="description" :class="{ danger }"><slot /></p>
</template>

<style scoped lang="sass">
.description
  width: min(100%, 35rem)
  @apply text-sm text-muted-foreground

  &.danger
    @apply text-destructive
</style>
