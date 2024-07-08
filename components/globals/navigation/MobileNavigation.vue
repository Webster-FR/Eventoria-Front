<script setup lang="ts">
import {Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import {Menu} from "@iconoir/vue";
import NavigationContent from "~/components/globals/navigation/NavigationContent.vue";
</script>

<template>
  <Sheet>
    <SheetTrigger>
      <Button variant="ghost" size="icon" class="inline-flex lg:hidden">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader class="px-4">
        <SheetTitle>{{ $t("navigation.title") }}</SheetTitle>
      </SheetHeader>

      <div class="py-6 flex flex-col gap-1">
        <NavigationContent mobile />
      </div>
    </SheetContent>
  </Sheet>
</template>

<style scoped>

</style>
