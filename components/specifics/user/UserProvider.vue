<script setup lang="ts">
const user = useState('user').value;
</script>

<template>
  <div v-if="user">
    <slot name="default" />
  </div>
  <div v-else>
    <slot name="fallback" />
  </div>
</template>

<style scoped>

</style>
