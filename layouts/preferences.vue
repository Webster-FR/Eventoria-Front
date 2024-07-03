<script setup lang="ts">
import DesktopSideBar from "~/components/specifics/preferences/navigation/DesktopSideBar.vue";
import MobileSideBar from "~/components/specifics/preferences/navigation/MobileSideBar.vue";
import DeleteAccountDialog from "~/components/specifics/preferences/dialogs/DeleteAccountDialog.vue";
import {useToast} from "~/components/ui/toast";
import {useI18n} from "#i18n";

const { t } = useI18n();
const { toast } = useToast();

const deleteModalOpened = ref<boolean>(false);
const deleteAccount = () => {
  toast({
    title: t("pages.preferences.sections.deleteAccount.toasts.accountDeleted.title"),
    description: t("pages.preferences.sections.deleteAccount.toasts.accountDeleted.description"),
  })
};
</script>

<template>
  <div class="layout-wrapper flex flex-col gap-3 h-dvh py-6 lg:flex-row lg:items-start">
    <DesktopSideBar @askDelete="deleteModalOpened = true" />
    <MobileSideBar @askDelete="deleteModalOpened = true" />

    <DeleteAccountDialog :open="deleteModalOpened" @toggleOpened="deleteModalOpened = $event" @confirmed="deleteAccount" />

    <slot />
  </div>
</template>
