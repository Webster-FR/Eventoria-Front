<script setup lang="ts">
import {useSwitchLocalePath, useI18n} from "#i18n";
import locales from "~/langs";
import {Button, type ButtonVariants} from "~/components/ui/button";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem} from "~/components/ui/dropdown-menu";
import {NavArrowDown} from "@iconoir/vue";

type LocaleDisplayFormat = 'short' | 'long';

const { format } = defineProps<{
  format?: LocaleDisplayFormat;
  disableArrow?: boolean;
  variant?: ButtonVariants['variant'];
}>();

const switchLocale = useSwitchLocalePath();
const { locale } = useI18n();
// @ts-ignore
const selectedLanguage = computed(_ => format === 'short' ? locale.value.toUpperCase() : locales[locale.value]);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button :variant="variant ?? 'ghost'" :class="{ 'p-3': disableArrow }">
        <span>{{ selectedLanguage }}</span>
        <NavArrowDown v-if="!disableArrow" class="ml-2" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuItem v-for="(lang, key) in locales" :key="key" as-child>
          <NuxtLink :to="switchLocale(key)">{{ lang }}</NuxtLink>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped lang="sass">
[data-lang-link]
  &.active
    @apply underline
</style>
