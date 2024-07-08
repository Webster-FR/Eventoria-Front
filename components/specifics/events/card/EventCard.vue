<script setup lang="ts">
import {Card, CardHeader, CardContent} from "~/components/ui/card";
import type {IEvent} from "~/types/event.types";
import {EventCardTitle, EventCardDescription, EventCardLabel} from "./";

defineProps<{
  event: IEvent;
}>();
</script>

<template>
  <Card class="relative overflow-hidden">
    <CardHeader class="p-0">
      <NuxtImg class="thumbnail object-cover object-center" :src="event.thumbnail" v-if="event.thumbnail" />
      <span class="block thumbnail bg-primary" v-else />
    </CardHeader>

    <CardContent class="p-6">
      <EventCardLabel>{{ event.category }}</EventCardLabel>
      <EventCardTitle>{{ event.name }}</EventCardTitle>
      <EventCardDescription>{{ event.description }}</EventCardDescription>
    </CardContent>

    <NuxtLink :to="`/event/${event.ulid}`" class="absolute inset-0 z-10" />
  </Card>
</template>

<style scoped lang="sass">
.thumbnail
  @apply aspect-banner w-full rounded-md
</style>
