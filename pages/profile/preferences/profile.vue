<script setup lang="ts">
import UserNameDialog from "~/components/specifics/preferences/dialogs/UserNameDialog.vue";
import DisplayNameDialog from "~/components/specifics/preferences/dialogs/DisplayNameDialog.vue";
import {
  PreferenceCard,
  PreferenceCardSection, PreferenceCardSectionAction,
  PreferenceCardSectionContent, PreferenceCardSectionDescription, PreferenceCardSectionTitle
} from "~/components/specifics/preferences/card";
import {EditPencil} from "@iconoir/vue";
import {useToast} from "~/components/ui/toast";

definePageMeta({
  layout: 'preferences',
});

const { t } = useI18n();
useHead({
  title: `${t("pages.preferences.title")} · ${t("pages.preferences.sections.profile.title")}`
});
const {toast} = useToast();

const userNameDialog = ref<boolean>(false);
const changeUsername = (newUsername: string) => {
  const toastKey = "pages.preferences.sections.profile.params.userName.toasts";
  toast({
    title: t(`${toastKey}.usernameUpdated.title`),
    description: t(`${toastKey}.usernameUpdated.description`).replace('%username', newUsername),
  });
};

const displayNameDialog = ref<boolean>(false);
const changeDisplayName = (newDisplayName: string) => {
  const toastKey = "pages.preferences.sections.profile.params.displayName.toasts";
  toast({
    title: t(`${toastKey}.displayNameUpdated.title`),
    description: t(`${toastKey}.displayNameUpdated.description`).replace('%displayName', newDisplayName),
  });
};
</script>

<template>
  <PreferenceCard>
    <template #title>{{ $t("pages.preferences.sections.profile.title") }}</template>
    <template #default>
      <PreferenceCardSection>
        <PreferenceCardSectionContent>
          <PreferenceCardSectionTitle>{{ $t("pages.preferences.sections.profile.params.userName.title") }}</PreferenceCardSectionTitle>
          <PreferenceCardSectionDescription>{{ $t("pages.preferences.sections.profile.params.userName.description") }}</PreferenceCardSectionDescription>
        </PreferenceCardSectionContent>

        <UserNameDialog :open="userNameDialog" @update:open="userNameDialog = $event" @confirmed="changeUsername" />

        <PreferenceCardSectionAction class="!flex-row h-10 pl-3 border-[1px] gap-1 rounded-md border-border bg-background">
          <span>loic.maes</span>
          <Button variant="ghost" class="p-3" @click="userNameDialog = true"><EditPencil /></Button>
        </PreferenceCardSectionAction>
      </PreferenceCardSection>
      <PreferenceCardSection>
        <PreferenceCardSectionContent>
          <PreferenceCardSectionTitle>{{ $t("pages.preferences.sections.profile.params.userName.title") }}</PreferenceCardSectionTitle>
          <PreferenceCardSectionDescription>{{ $t("pages.preferences.sections.profile.params.userName.description") }}</PreferenceCardSectionDescription>
        </PreferenceCardSectionContent>

        <DisplayNameDialog :open="displayNameDialog" @update:open="displayNameDialog = $event" @confirmed="changeDisplayName" />

        <PreferenceCardSectionAction class="!flex-row h-10 pl-3 border-[1px] gap-1 rounded-md border-border bg-background">
          <span>Loïc</span>
          <Button variant="ghost" class="p-3" @click="displayNameDialog = true"><EditPencil /></Button>
        </PreferenceCardSectionAction>
      </PreferenceCardSection>
    </template>
  </PreferenceCard>
</template>

<style scoped>

</style>
