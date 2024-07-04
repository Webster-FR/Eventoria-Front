<script setup lang="ts">
import {useI18n} from "#i18n";
import {
  PreferenceCard,
  PreferenceCardSection,
  PreferenceCardSectionTitle,
  PreferenceCardSectionAction,
  PreferenceCardSectionContent,
  PreferenceCardSectionDescription,
} from "~/components/specifics/preferences/card";
import ChangeEmailDialog from "~/components/specifics/preferences/dialogs/ChangeEmailDialog.vue";
import ChangePasswordDialog from "~/components/specifics/preferences/dialogs/ChangePasswordDialog.vue";
import {useToast} from "~/components/ui/toast";

definePageMeta({
  layout: 'preferences',
});

const { t } = useI18n();
useHead({
  title: `${t("pages.preferences.title")} · ${t("pages.preferences.sections.security.title")}`
});
const { toast } = useToast();

const user = { email: 'dev@maesloic.fr', verifiedAt: null };

const changeEmailDialog = ref<boolean>(false);
const changeEmail = async (email: string) => {
  const toastKey = "pages.preferences.sections.security.params.emailAddress.toasts";
  toast({
    title: t(`${toastKey}.emailChanged.title`),
    description: t(`${toastKey}.emailChanged.description`),
  });
};

const changePasswordDialog = ref<boolean>(false);
const changePassword = async ({newPassword, disconnectEverywhere}: { newPassword: string, disconnectEverywhere: boolean }) => {
  const toastKey = "pages.preferences.sections.security.params.password.toasts";
  toast({
    title: t(`${toastKey}.passwordChanged.title`),
    description: t(`${toastKey}.passwordChanged.description`),
  });
}
</script>

<template>
  <PreferenceCard>
    <template #title>{{ $t("pages.preferences.sections.security.title") }}</template>
    <template #default>
      <PreferenceCardSection>
        <PreferenceCardSectionContent>
          <PreferenceCardSectionTitle>{{ $t("pages.preferences.sections.security.params.emailAddress.title") }}</PreferenceCardSectionTitle>
          <PreferenceCardSectionDescription :danger="!user.verifiedAt">{{ $t("pages.preferences.sections.security.params.emailAddress.description").replaceAll('%(emailAddress)', user.email) }}</PreferenceCardSectionDescription>
        </PreferenceCardSectionContent>

        <ChangeEmailDialog :open="changeEmailDialog" @update:open="changeEmailDialog = $event" @confirmed="changeEmail" />

        <PreferenceCardSectionAction>
          <Button variant="outline" @click="changeEmailDialog = true">{{ $t("pages.preferences.sections.security.params.emailAddress.action") }}</Button>
        </PreferenceCardSectionAction>
      </PreferenceCardSection>
      <PreferenceCardSection>
        <PreferenceCardSectionContent>
          <PreferenceCardSectionTitle>{{ $t("pages.preferences.sections.security.params.password.title") }}</PreferenceCardSectionTitle>
          <PreferenceCardSectionDescription>{{ $t("pages.preferences.sections.security.params.password.description") }}</PreferenceCardSectionDescription>
        </PreferenceCardSectionContent>

        <ChangePasswordDialog :open="changePasswordDialog" @update:open="changePasswordDialog = $event" @confirmed="changePassword" />

        <PreferenceCardSectionAction>
          <Button variant="outline" @click="changePasswordDialog = true">{{ $t("pages.preferences.sections.security.params.password.action") }}</Button>
        </PreferenceCardSectionAction>
      </PreferenceCardSection>
    </template>
  </PreferenceCard>
</template>
