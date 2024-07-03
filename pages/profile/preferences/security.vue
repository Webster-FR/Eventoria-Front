<script setup lang="ts">
import {useI18n} from "#i18n";
import PreferenceCard from "~/components/specifics/preferences/PreferenceCard.vue";

definePageMeta({
  layout: 'preferences',
});

const { t } = useI18n();
useHead({
  title: `${t("pages.preferences.title")} · ${t("pages.preferences.sections.security.title")}`
})
</script>

<template>
  <PreferenceCard>
    <template #title>{{ $t("pages.preferences.sections.security.title") }}</template>
  </PreferenceCard>
</template>
