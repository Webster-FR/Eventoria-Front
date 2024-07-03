<script setup lang="ts">
import {Button} from "~/components/ui/button";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem} from "~/components/ui/dropdown-menu";
import {HalfMoon, SunLight} from "@iconoir/vue";

const colorMode = useColorMode();

const theme = computed(_ => {
  switch (colorMode.preference) {
    case 'system':
      return window?.matchMedia('[preferred-color-scheme: dark]') ? 'dark' : 'light';
    default:
      return colorMode.preference;
  }
});
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="ghost" class="p-3">
        <ClientOnly>
          <HalfMoon v-if="theme === 'dark'" />
          <SunLight v-else />

          <template #fallback>
            <span class="block rounded-full bg-transparent w-4 h-4" />
          </template>
        </ClientOnly>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuRadioGroup v-model="colorMode.preference">
        <DropdownMenuRadioItem value="light">{{ $t("generics.themes.light") }}</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="dark">{{ $t("generics.themes.dark") }}</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="system">{{ $t("generics.themes.system") }}</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped>

</style>
