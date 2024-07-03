<script setup lang="ts">
import ThemeSelector from "~/components/globals/ThemeSelector.vue";
import LangSelector from "~/components/globals/LangSelector.vue";
import UserProvider from "~/components/specifics/user/UserProvider.vue";
import UserDropdown from "~/components/specifics/user/UserDropdown.vue";
import {Button} from "~/components/ui/button";
import {useLocalePath} from "#i18n";
import DesktopNavigation from "~/components/specifics/navigation/DesktopNavigation.vue";

const localePath = useLocalePath();
</script>

<template>
  <div class="layout-wrapper">
    <header class="grid grid-cols-4 items-center justify-between sticky top-0 py-4 bg-background">
      <NuxtLink :to="localePath('/')">Eventoria</NuxtLink>

      <div class="hidden justify-center col-span-2 md:flex">
        <DesktopNavigation />
      </div>

      <UserProvider>
        <UserDropdown />

        <template #fallback>
          <div class="flex justify-end items-center gap-1">
            <ThemeSelector />
            <LangSelector format="short" disable-arrow />
            <Button as-child>
              <NuxtLink :to="localePath('/auth/login')">{{ $t("navigation.cta") }}</NuxtLink>
            </Button>
          </div>
        </template>
      </UserProvider>
    </header>

    <main class="min-h-dvh">
      <slot />
    </main>
  </div>
</template>
