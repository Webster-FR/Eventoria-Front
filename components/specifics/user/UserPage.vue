<script setup lang="ts">
import type {IUser} from "~/types/user.types";
import type {IPage} from "~/types/page.types";
import PageCard from "~/components/specifics/page/PageCard.vue";
import {UserCard} from "~/components/specifics/user/profile-card";

defineProps<{
  user: IUser;
  page?: IPage;
}>();
</script>

<template>
  <div class="flex flex-col md:flex-row items-stretch md:items-start gap-6">
    <UserCard :user="user" />

    <div class="flex-1 flex flex-col gap-6">
      <PageCard :page="page" v-if="page" />
      <span>Todo: EVENTS</span>
    </div>
  </div>
</template>

<style scoped>

</style>
