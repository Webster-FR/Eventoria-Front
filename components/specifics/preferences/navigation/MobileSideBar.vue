<script setup lang="ts">
import {Sheet, SheetTrigger, SheetContent} from "~/components/ui/sheet";
import SideBarLinks from "~/components/specifics/preferences/navigation/SideBarLinks.vue";
import {Menu} from "@iconoir/vue";

defineEmits([
    'askDelete',
]);

const opened = ref<boolean>(false);
const close = () => opened.value = false;
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between lg:hidden">
      <CardTitle>{{ $t("pages.preferences.title") }}</CardTitle>
      <Sheet :open="opened" @update:open="opened = $event">
        <SheetTrigger>
          <Button variant="ghost" class="lg:hidden p-3"><Menu class="h-6 w-6" /></Button>
        </SheetTrigger>
        <SheetContent class="flex flex-col gap-2 pt-12">
          <SideBarLinks @switched="close" @askDelete="$emit('askDelete')" />
        </SheetContent>
      </Sheet>
    </CardHeader>
  </Card>
</template>

<style scoped>

</style>
