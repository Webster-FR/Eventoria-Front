<script setup lang="ts">
import {UserCard} from "~/components/specifics/user/profile-card";
import {useI18n} from "#i18n";
import type {IUser} from "~/types/user.types";

const { t } = useI18n();
useHead({
  title: `Eventoria · ${t("pages.profile.title")}`
});

const user: IUser = {
  id: 1,
  username: "loic.maes",
  email: "dev@maesloic.fr",
  admin: false,
  createdAt: new Date(),
  updatedAt: new Date(),
  verifiedAt: new Date(),
  profileConfiguration: {
    displayName: "Loïc",
    bio: "Développeur et Web Designer Freelance, j'ai besoin de prendre l'air et de rencontrer du monde.",
    avatar: undefined,
    instagram: "ms.loic",
    facebook: undefined,
  }
};
const page = {
  name: "La cité des Anges",
  bio: "Découvrez un univers où tout est léger, des cocktails à vous faire voyager, un air pur et doux. Une ambiance conviviale et chaleureuse. Un bon mélange pour passer une agréable soirée.",
  banner: "https://images.unsplash.com/photo-1719957936033-62a506c1af6d?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  avatar: null,
};
</script>

<template>
  <div class="flex flex-col md:flex-row items-stretch md:items-start gap-6">
    <UserCard :user="user" />

    <div class="flex-1 flex flex-col gap-6">
      <Card class="overflow-hidden">
        <CardContent :class="`relative flex items-center justify-between p-6 isolate before-gradient`">
          <NuxtImg :src="page.banner" class="absolute inset-0 object-center -z-20" />

          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <Avatar>
                <AvatarImage :src="page.avatar ?? ''" />
                <AvatarFallback>{{ page.name.split(' ').map(c => c.substring(0, 1)).join('').substring(0, 3) }}</AvatarFallback>
              </Avatar>
              <h2 class="text-xl font-extrabold">{{ page.name }}</h2>
            </div>
            <p class="ml-12 page-bio">{{ page.bio }}</p>
          </div>
          <Button>Visiter la page</Button>
        </CardContent>
      </Card>
      <span>Todo: EVENTS</span>
    </div>
  </div>
</template>

<style scoped lang="sass">
.before-gradient
  @apply before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-l before:from-card before:from-40% before:to-card/75

.page-bio
  width: min(100%, 25rem)
</style>
