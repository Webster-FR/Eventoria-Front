<template>
  <p class="description"><slot /></p>
</template>

<style scoped lang="sass">
.description
  width: min(100%, 35rem)
  @apply text-sm text-muted-foreground
</style>
