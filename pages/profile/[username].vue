<script setup lang="ts">
import type {IUser} from "~/types/user.types";
import {useI18n} from "#i18n";
import UserPage from "~/components/specifics/user/UserPage.vue";

const { params } = useRoute();
const username = params.username;

const user: IUser = {
  id: 2,
  username: username as string,
  email: "perso@maesloic.fr",
  admin: false,
  verifiedAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
  profileConfiguration: {
    displayName: username as string,
    instagram: username as string,
  }
}; // TODO: fetch data from back-end

const { t } = useI18n();
useHead({
  title: `Eventoria · ${t("pages.profile.title-alt").replace('%user', user.profileConfiguration.displayName)}`
});
</script>

<template>
  <UserPage :user="user" />
</template>

<style scoped lang="sass">
.before-gradient
  @apply before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-l before:from-card before:from-40% before:to-card/75

.page-bio
  width: min(100%, 25rem)
</style>
