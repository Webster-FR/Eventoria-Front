<script setup lang="ts">
import type {IPage} from "~/types/page.types";

defineProps<{
  page: IPage;
}>();
</script>

<template>
  <Card class="overflow-hidden">
    <CardContent :class="`relative flex flex-col lg:flex-row gap-6 lg:gap-0 items-start lg:items-center justify-between p-6 isolate before-gradient`">
      <NuxtImg :src="useImagePath(page.publicData.banner)" class="absolute h-full w-full object-center inset-0 -z-20" v-if="page.publicData.banner" />

      <div class="flex flex-col gap-2">
        <div class="flex flex-col lg:flex-row lg:items-center gap-2">
          <Avatar>
            <AvatarImage :src="useImagePath(page.publicData.avatar)" v-if="page.publicData.avatar" />
            <AvatarFallback>{{ page.publicData.name.split(' ').map((c: string) => c.substring(0, 1)).join('').substring(0, 3) }}</AvatarFallback>
          </Avatar>
          <h2 class="text-xl font-extrabold">{{ page.publicData.name }}</h2>
        </div>
        <p class="lg:ml-12 w-full lg:w-mx25">{{ page.publicData.bio }}</p>
      </div>
      <Button>{{ $t("pages.page.card.cta") }}</Button>
    </CardContent>
  </Card>
</template>

<style scoped lang="sass">
.before-gradient
  @apply before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-t lg:before:bg-gradient-to-l before:from-card before:from-40% before:to-card/75
</style>
