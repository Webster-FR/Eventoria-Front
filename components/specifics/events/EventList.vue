<script setup lang="ts">
import type {IEvent} from "~/types/event.types";
import {EventCard} from "~/components/specifics/events/card";

defineProps<{
  list: IEvent[];
}>();
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-6">
    <template v-if="list.length">
      <EventCard :event="event" :key="event.ulid" v-for="event in list" />
    </template>
    <template v-else>No Events</template>
  </div>
</template>

<style scoped>

</style>
