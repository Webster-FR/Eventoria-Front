<script setup lang="ts">
const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="`flex flex-col gap-3 items-start ${props.class}`"><slot /></div>
</template>
