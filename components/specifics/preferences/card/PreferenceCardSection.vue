<script setup lang="ts">
defineProps<{
  direction?: 'horizontal' | 'vertical',
}>();
</script>

<template>
  <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 md:justify-between lg:gap-12 xl:gap-16 p-6" :class="{ 'flex-col items-start': direction === 'vertical' }"><slot /></div>
</template>
