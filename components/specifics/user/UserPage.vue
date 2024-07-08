<script setup lang="ts">
import type {IUser} from "~/types/user.types";
import type {IPage} from "~/types/page.types";
import PageCard from "~/components/specifics/page/PageCard.vue";
import {UserCard} from "~/components/specifics/user/profile-card";
import type {IEvent} from "~/types/event.types";
import EventList from "~/components/specifics/events/EventList.vue";

defineProps<{
  user: IUser;
  page?: IPage;
  events?: IEvent[];
}>();
</script>

<template>
  <div class="flex flex-col md:flex-row items-stretch md:items-start gap-6">
    <UserCard :user="user" />

    <div class="flex-1 flex flex-col gap-6">
      <PageCard :page="page" v-if="page" />
      <EventList :list="events ?? []" />
    </div>
  </div>
</template>

<style scoped>

</style>
