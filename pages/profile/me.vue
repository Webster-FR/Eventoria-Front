<script setup lang="ts">
import {useI18n} from "#i18n";
import type {IUser} from "~/types/user.types";
import type {IPage} from "~/types/page.types";
import UserPage from "~/components/specifics/user/UserPage.vue";
import type {IEvent} from "~/types/event.types";

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
    facebook: "loic.maes.5815",
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
const events: IEvent[] = [
  {
    ulid: "adefd-seses-seses-eses",
    category: "cinema",
    place: "21 rue Vincent Scotto, 67400 Illkirch-Graffenstaden",
    participationMandatory: false,
    name: "Pourquoi moi ?",
    description: "Mais pourquoi moi ?",
    tags: "coucou, pourquoi, moi",
    hidden: false,

    createdAt: new Date(),
    updatedAt: new Date(),
    startsAt: new Date(),
    endsAt: new Date(),
  },
  {
    ulid: "adefd-seses-seses-eses",
    category: "cinema",
    place: "21 rue Vincent Scotto, 67400 Illkirch-Graffenstaden",
    participationMandatory: false,
    name: "Pourquoi toi ?",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae blanditiis consequuntur, dignissimos dolor dolorem doloremque doloribus eaque eius et exercitationem explicabo hic id inventore maxime natus neque non officia perferendis quos saepe vero voluptatibus? Ad asperiores blanditiis deleniti dolorem dolorum exercitationem ipsa itaque nam obcaecati perferendis possimus praesentium, sapiente!",
    tags: "coucou, pourquoi, toi",
    hidden: false,

    createdAt: new Date(),
    updatedAt: new Date(),
    startsAt: new Date(),
    endsAt: new Date(),
    cancelledAt: new Date(),
  },
  {
    ulid: "adefd-seses-seses-eses",
    category: "cinema",
    place: "21 rue Vincent Scotto, 67400 Illkirch-Graffenstaden",
    participationMandatory: false,
    name: "Pourquoi pas nous?",
    description: "Mais pourquoi pas nous ?",
    tags: "coucou, pourquoi, nous",
    hidden: false,

    createdAt: new Date(),
    updatedAt: new Date(),
    startsAt: new Date(),
    endsAt: new Date(),
    cancelledAt: new Date(),
  }
];

if (navigator) console.log(navigator.userAgent);
</script>

<template>
  <UserPage :user="user" :page="page" :events="events" />
</template>
