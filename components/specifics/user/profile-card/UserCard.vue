<script setup lang="ts">
import type {IUser} from "~/types/user.types";
import {NavArrowUp, NavArrowDown, Quote, ShareAndroid, Instagram, Facebook, X} from "@iconoir/vue";
import {UserCardSection, UserCardSectionBadge, UserCardSectionContent, UserCardHeader, UserCardTitle, UserCardDescription} from "./";
import {Button} from "~/components/ui/button";
import UserCardSocialLink from "~/components/specifics/user/profile-card/UserCardSocialLink.vue";

defineProps<{
  user: IUser;
}>();
const opened = ref<boolean>(false);
</script>

<template>
  <Card class="w-full md:max-w-64 lg:max-w-80 md:sticky md:top-16">
    <CardHeader class="gap-0 p-0">
      <span class="block w-full h-40 md:h-32 lg:h-40 bg-primary rounded-md" />

      <Avatar size="lg" class="mx-auto -mt-16 border-8 border-card">
        <AvatarImage :src="user.profileConfiguration.avatar?.uri ?? ''" />
        <AvatarFallback>{{ user.profileConfiguration.displayName.substring(0, 2).toUpperCase() }}</AvatarFallback>
      </Avatar>

      <UserCardHeader>
        <Button variant="ghost" class="absolute gap-2 bottom-0 right-6 md:hidden" @click="opened = !opened">
          <span>{{ opened ? $t("generics.buttons.seeLess") : $t("generics.buttons.seeMore") }}</span>

          <NavArrowUp v-if="opened" />
          <NavArrowDown v-else />
        </Button>

        <UserCardTitle>{{ user.profileConfiguration.displayName }}</UserCardTitle>
        <UserCardDescription>@{{ user.username }}</UserCardDescription>
      </UserCardHeader>
    </CardHeader>

    <CardContent class="p-6 grid grid-rows-[0fr] md:grid-rows-[1fr] transition-all" :class="{ 'grid-rows-[1fr]': opened }">
      <div class="overflow-hidden flex flex-col gap-5">
        <UserCardSection v-if="user.profileConfiguration.bio">
          <UserCardSectionBadge>
            <Quote class="h-3 w-3" />
            <span>{{ $t("pages.profile.card.labels.bio") }}</span>
          </UserCardSectionBadge>
          <UserCardSectionContent>{{ user.profileConfiguration.bio }}</UserCardSectionContent>
        </UserCardSection>

        <UserCardSection>
          <UserCardSectionBadge>
            <ShareAndroid class="h-3 w-3" />
            <span>{{ $t("pages.profile.card.labels.networks") }}</span>
          </UserCardSectionBadge>
          <UserCardSectionContent class="!gap-0">
            <UserCardSocialLink type="instagram" :link="user.profileConfiguration.instagram">@</UserCardSocialLink>
            <UserCardSocialLink type="facebook" :link="user.profileConfiguration.facebook"></UserCardSocialLink>
            <UserCardSocialLink type="twitter" :link="user.profileConfiguration.twitter">@</UserCardSocialLink>
          </UserCardSectionContent>
        </UserCardSection>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped lang="sass">
</style>
