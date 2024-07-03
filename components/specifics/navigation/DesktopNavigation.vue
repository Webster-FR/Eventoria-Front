<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "~/components/ui/navigation-menu";
import {useLocalePath} from "#i18n";

const localePath = useLocalePath();
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>{{ $t("navigation.links.explore.trigger") }}</NavigationMenuTrigger>
        <NavigationMenuContent>

        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NuxtLink :to="localePath('/')">
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            {{ $t("navigation.links.pricing") }}
          </NavigationMenuLink>
        </NuxtLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NuxtLink :to="localePath('/')">
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            {{ $t("navigation.links.about") }}
          </NavigationMenuLink>
        </NuxtLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<style scoped>

</style>
