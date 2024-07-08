<script setup lang="ts">
import {useI18n} from "#i18n";
import type {IUser} from "~/types/user.types";
import type {IPage} from "~/types/page.types";
import UserPage from "~/components/specifics/user/UserPage.vue";

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
    facebook: "maesloic2",
    twitter: "LoicServices"
  }
};
const page: IPage = {
  ulid: "12345-66d-ee8-d4s5e",
  type: "personal",
  hidden: false,
  createdAt: new Date(),
  updatedAt: new Date(),
  publicData: {
    name: "La cité des Anges",
    bio: "Découvrez un univers où tout est léger, des cocktails à vous faire voyager, un air pur et doux. Une ambiance conviviale et chaleureuse. Un bon mélange pour passer une agréable soirée.",
    banner: "https://images.unsplash.com/photo-1719957936033-62a506c1af6d?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  owner: user,
  comments: [],
};
</script>

<template>
  <UserPage :user="user" :page="page" />
</template>
