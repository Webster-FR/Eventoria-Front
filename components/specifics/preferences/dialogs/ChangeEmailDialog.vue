<script setup lang="ts">
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from "~/components/ui/dialog";
import {useForm} from "vee-validate";
import * as z from "zod";
import {toTypedSchema} from "@vee-validate/zod";

defineProps<{
  open: boolean;
}>();
const emit = defineEmits(['update:open', 'confirmed']);

const schema = toTypedSchema(z.object({
  newEmail: z.string().min(1).email(),
}));
const { handleSubmit } = useForm({
  validationSchema: schema,
});
const submit = handleSubmit(({ newEmail }) => {
  emit('update:open', false);
  emit('confirmed', newEmail);
});
</script>

<template>
  <Dialog :open="open" @update:open="$emit('update:open', $event)">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ $t("pages.preferences.sections.security.params.emailAddress.dialog.title") }}</DialogTitle>
        <DialogDescription>{{ $t("pages.preferences.sections.security.params.emailAddress.dialog.description") }}</DialogDescription>
      </DialogHeader>

      <form @submit="submit">
        <FormField name="newEmail" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>{{ $t("pages.preferences.sections.security.params.emailAddress.dialog.input.label") }}</FormLabel>
            <FormControl>
              <Input
                  type="email"
                  :placeholder="$t('pages.preferences.sections.security.params.emailAddress.dialog.input.placeholder')"
                  v-bind="componentField"
              />
            </FormControl>
          </FormItem>
        </FormField>

        <DialogFooter class="mt-6 flex flex-col gap-3 md:flex-row">
          <Button type="button" @click="$emit('update:open', false)" variant="outline">{{ $t("generics.buttons.cancel") }}</Button>
          <Button type="submit">{{ $t("generics.buttons.updateConfirm") }}</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>

<style scoped>

</style>
