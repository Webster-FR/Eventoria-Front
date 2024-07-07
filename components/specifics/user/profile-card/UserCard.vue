<script setup lang="ts">
import type {IUser} from "~/types/user.types";
import {NavArrowUp, NavArrowDown, Quote, Instagram, Facebook} from "@iconoir/vue";
import UserCardSection from "./UserCardSection.vue";
import UserCardBadge from "./UserCardBadge.vue";
import UserCardContent from "./UserCardContent.vue";
import {Button} from "~/components/ui/button";

defineProps<{
  user: IUser;
}>();
const opened = ref<boolean>(false);
</script>

<template>
  <Card class="w-full md:max-w-64 lg:max-w-80 md:sticky md:top-16">
    <CardHeader class="p-0">
      <span class="block w-full h-40 md:h-32 lg:h-40 bg-primary rounded-md" />
    </CardHeader>
    <CardContent class="grid gap-0 grid-rows-[min-content_0fr] md:gap-4 md:grid-rows-[min-content_1fr] transition-all" :class="{ 'gap-4 grid-rows-[min-content_1fr]': opened }">
      <div class="relative flex flex-col">
        <Button variant="ghost" class="absolute gap-2 bottom-0 right-0 md:hidden" @click="opened = !opened">
          <span>{{ opened ? $t("generics.buttons.seeLess") : $t("generics.buttons.seeMore") }}</span>

          <NavArrowUp v-if="opened" />
          <NavArrowDown v-else />
        </Button>

        <Avatar size="lg" class="mx-auto -mt-16 border-8 border-card">
          <AvatarImage :src="user.profileConfiguration.avatar?.uri ?? ''" />
          <AvatarFallback>{{ user.profileConfiguration.displayName.substring(0, 2).toUpperCase() }}</AvatarFallback>
        </Avatar>

        <div class="flex flex-col">
          <p class="text-2xl font-bold">{{ user.profileConfiguration.displayName }}</p>
          <span class="text-muted-foreground">@{{ user.username }}</span>
        </div>
      </div>

      <div class="overflow-hidden flex flex-col gap-5">
        <UserCardSection v-if="user.profileConfiguration.bio">
          <UserCardBadge>
            <Quote class="h-3 w-3" />
            <span>{{ $t("pages.profile.card.labels.bio") }}</span>
          </UserCardBadge>
          <UserCardContent>{{ user.profileConfiguration.bio }}</UserCardContent>
        </UserCardSection>

        <UserCardSection>
          <UserCardBadge>
            <span>{{ $t("pages.profile.card.labels.networks") }}</span>
          </UserCardBadge>
          <UserCardContent class="gap-0">
            <template v-if="user.profileConfiguration.instagram">
              <Button variant="link" class="-ml-4" as-child>
                <NuxtLink target="_blank" :to="`https://www.instagram.com/${user.profileConfiguration.instagram}`">
                  <Instagram class="mr-2" />
                  <span>@{{ user.profileConfiguration.instagram }}</span>
                </NuxtLink>
              </Button>
            </template>
            <template v-if="user.profileConfiguration.facebook">
              <Button variant="link" class="-ml-4" as-child>
                <NuxtLink target="_blank" :to="`https://www.facebook.com/${user.profileConfiguration.facebook}`">
                  <Facebook class="mr-2" />
                  <span>@{{ user.profileConfiguration.facebook }}</span>
                </NuxtLink>
              </Button>
            </template>
          </UserCardContent>
        </UserCardSection>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped lang="sass">
</style>
