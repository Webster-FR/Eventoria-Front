<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from "~/components/ui/alert-dialog";

defineProps<{
  open: boolean;
}>();
defineEmits(['toggleOpened', 'confirmed']);
</script>

<template>
  <AlertDialog :open="open" @update:open="$emit('toggleOpened', $event)">
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{{ $t("pages.preferences.sections.deleteAccount.dialog.title") }}</AlertDialogTitle>
        <AlertDialogDescription>{{ $t("pages.preferences.sections.deleteAccount.dialog.description") }}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>{{ $t("generics.buttons.cancel") }}</AlertDialogCancel>
        <AlertDialogAction @click="$emit('confirmed')">{{ $t("pages.preferences.sections.deleteAccount.dialog.action") }}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style scoped>

</style>
