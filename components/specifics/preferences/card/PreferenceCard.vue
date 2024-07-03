<script setup lang="ts">
</script>

<template>
  <Card class="flex-1">
    <CardHeader>
      <CardTitle><slot name="title" /></CardTitle>
    </CardHeader>
    <Separator />
    <CardContent class="p-0 divide-y">
      <slot />
    </CardContent>
  </Card>
</template>

<style scoped>

</style>
