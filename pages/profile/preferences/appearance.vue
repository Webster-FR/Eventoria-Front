<script setup lang="ts">
import {useI18n} from "#i18n";
import {
  PreferenceCard,
  PreferenceCardSection,
  PreferenceCardSectionContent,
  PreferenceCardSectionTitle,
  PreferenceCardSectionDescription, PreferenceCardSectionAction,
} from "~/components/specifics/preferences/card";
import LangSelector from "~/components/globals/LangSelector.vue";
import {NavArrowDown, HalfMoon, SunLight} from "@iconoir/vue";

definePageMeta({
  layout: 'preferences',
});

const { t } = useI18n();
useHead({
  title: `${t("pages.preferences.title")} · ${t("pages.preferences.sections.appearance.title")}`
});

const theme = computed(_ => useTheme());
</script>

<template>
  <PreferenceCard>
    <template #title>{{ $t("pages.preferences.sections.appearance.title") }}</template>
    <template #default>
      <PreferenceCardSection>
        <PreferenceCardSectionContent>
          <PreferenceCardSectionTitle>{{ $t("pages.preferences.sections.appearance.params.language.title") }}</PreferenceCardSectionTitle>
          <PreferenceCardSectionDescription>{{ $t("pages.preferences.sections.appearance.params.language.description") }}</PreferenceCardSectionDescription>
        </PreferenceCardSectionContent>

        <LangSelector variant="outline" format="long" />
      </PreferenceCardSection>
      <PreferenceCardSection>
        <PreferenceCardSectionContent>
          <PreferenceCardSectionTitle>{{ $t("pages.preferences.sections.appearance.params.theme.title") }}</PreferenceCardSectionTitle>
          <PreferenceCardSectionDescription>{{ $t("pages.preferences.sections.appearance.params.theme.description") }}</PreferenceCardSectionDescription>
        </PreferenceCardSectionContent>

        <PreferenceCardSectionAction>
          <ClientOnly>
            <HalfMoon v-if="theme === 'dark'"/>
            <SunLight v-else />
          </ClientOnly>

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline">
                <ClientOnly>
                  <span>{{ $t(`generics.themes.${$colorMode.preference}`) }}</span>

                  <template #fallback>
                    <span>{{ $t("generics.buttons.loading") }}</span>
                  </template>
                </ClientOnly>
                <NavArrowDown class="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup v-model="$colorMode.preference">
                <DropdownMenuRadioItem value="light">{{ $t("generics.themes.light") }}</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">{{ $t("generics.themes.dark") }}</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system">{{ $t("generics.themes.system") }}</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </PreferenceCardSectionAction>
      </PreferenceCardSection>
    </template>
  </PreferenceCard>
</template>
