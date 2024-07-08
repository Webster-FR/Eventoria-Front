<script setup lang="ts">
import UserProvider from "~/components/specifics/user/UserProvider.vue";
import LangSelector from "~/components/globals/LangSelector.vue";
import UserDropdown from "~/components/specifics/user/UserDropdown.vue";
import ThemeSelector from "~/components/globals/ThemeSelector.vue";
import {Button} from "~/components/ui/button";
import {useLocalePath} from "#i18n";
import {DesktopNavigation, MobileNavigation} from "./";

const localePath = useLocalePath();
</script>

<template>
  <header class="navigation-wrapper">
    <div class="flex items-center gap-3">
      <MobileNavigation />
      <NuxtLink :to="localePath('/')">Eventoria</NuxtLink>
    </div>

    <DesktopNavigation />

    <UserProvider>
      <UserDropdown />

      <template #fallback>
        <div class="flex justify-end items-center gap-1">
          <Button as-child>
            <NuxtLink :to="localePath('/auth/login')">{{ $t("navigation.cta") }}</NuxtLink>
          </Button>
        </div>
      </template>
    </UserProvider>
  </header>
</template>

<style scoped>

</style>
