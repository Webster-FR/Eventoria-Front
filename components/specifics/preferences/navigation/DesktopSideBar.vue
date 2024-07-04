<script setup lang="ts">
import SideBarLinks from "~/components/specifics/preferences/navigation/SideBarLinks.vue";
import {Card, CardHeader, CardContent, CardTitle} from "~/components/ui/card";
import {ArrowLeft} from "@iconoir/vue";
import {useLocalePath} from "#i18n";

defineEmits([
    'askDelete',
]);
const localePath = useLocalePath();
</script>

<template>
  <Card class="hidden lg:block">
    <CardHeader class="pt-3 flex flex-row items-center gap-2">
      <Button variant="ghost" class="-ml-3 p-3" as-child>
        <NuxtLink :to="localePath('/')">
          <ArrowLeft />
        </NuxtLink>
      </Button>
      <CardTitle>{{ $t("pages.preferences.title") }}</CardTitle>
    </CardHeader>
    <Separator />
    <CardContent class="flex flex-col gap-2 p-2 pt-6">
      <SideBarLinks @askDelete="$emit('askDelete')" />
    </CardContent>
  </Card>
</template>

<style scoped>

</style>
