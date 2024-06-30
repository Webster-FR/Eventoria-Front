<script setup lang="ts">
const { params } = useRoute();
const ulid = params.ulid;
</script>

<template>
  <h1>User {{ ulid }}</h1>
</template>

<style scoped>

</style>
