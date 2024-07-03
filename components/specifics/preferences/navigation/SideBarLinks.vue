<script setup lang="ts">
import {useLocalePath} from "#i18n";
import {HistoricShield, FillColor, Lock, Trash} from "@iconoir/vue";
import SideBarLink from "~/components/specifics/preferences/navigation/SideBarLink.vue";

const emit = defineEmits([
    'switched',
    'askDelete',
]);
const requestDelete = () => {
  emit('switched');
  emit('askDelete');
};
</script>

<template>
  <SideBarLink path="/profile/preferences/appearance" type="tab" @triggered="$emit('switched')">
    <FillColor class="mr-2" />
    <span>{{ $t("pages.preferences.sections.appearance.title") }}</span>
  </SideBarLink>
  <SideBarLink path="/profile/preferences/security" type="tab" @triggered="$emit('switched')">
    <HistoricShield class="mr-2" />
    <span>{{ $t("pages.preferences.sections.security.title") }}</span>
  </SideBarLink>
  <SideBarLink path="/profile/preferences/authorizations" type="tab" @triggered="$emit('switched')">
    <Lock class="mr-2" />
    <span>{{ $t("pages.preferences.sections.authorizations.title") }}</span>
  </SideBarLink>
  <SideBarLink danger @triggered="requestDelete" class="mt-8">
    <Trash class="mr-2" />
    <span>{{ $t("pages.preferences.sections.deleteAccount.title") }}</span>
  </SideBarLink>
</template>

<style scoped lang="sass">
.element
  @apply justify-start
</style>
