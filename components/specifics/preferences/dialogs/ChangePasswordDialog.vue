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
import {useToast} from "~/components/ui/toast";
import {useI18n} from "#i18n";

defineProps<{
  open: boolean;
}>();
const emit = defineEmits(['update:open', 'confirmed']);
const {toast} = useToast();
const {t} = useI18n();

const schema = toTypedSchema(z.object({
  newPassword: z.string().min(1).regex(passwordRegExp),
  confirm: z.string().min(1).regex(passwordRegExp),
}));
const { handleSubmit } = useForm({
  validationSchema: schema,
});
const disconnectEverywhere = ref<boolean>(false);
const submit = handleSubmit(({ newPassword, confirm }) => {
  const toastKey = "pages.preferences.sections.security.params.password.toasts";

  if (newPassword !== confirm) return toast({
    title: t(`${toastKey}.inconsistent.title`),
    description: t(`${toastKey}.inconsistent.description`),
    variant: "destructive",
  });

  emit('update:open', false);
  emit('confirmed', {
    newPassword,
    disconnectEverywhere: disconnectEverywhere.value,
  });
});
</script>

<template>
  <Dialog :open="open" @update:open="$emit('update:open', $event)">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ $t("pages.preferences.sections.security.params.password.dialog.title") }}</DialogTitle>
        <DialogDescription>{{ $t("pages.preferences.sections.security.params.password.dialog.description") }}</DialogDescription>
      </DialogHeader>

      <form @submit="submit">
        <FormField name="newPassword" v-slot="{ componentField }">
          <FormItem class="mb-3">
            <FormLabel>{{ $t("pages.preferences.sections.security.params.password.dialog.inputs.newPassword.label") }}</FormLabel>
            <FormControl>
              <Input
                  type="password"
                  :placeholder="$t('pages.preferences.sections.security.params.password.dialog.inputs.newPassword.placeholder')"
                  v-bind="componentField"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField name="confirm" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>{{ $t("pages.preferences.sections.security.params.password.dialog.inputs.confirm.label") }}</FormLabel>
            <FormControl>
              <Input
                  type="password"
                  :placeholder="$t('pages.preferences.sections.security.params.password.dialog.inputs.confirm.placeholder')"
                  v-bind="componentField"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <div class="flex items-center gap-2 mt-8">
          <Checkbox id="disconnectEverywhere" :checked="disconnectEverywhere" @update:checked="disconnectEverywhere = $event" />
          <Label for="disconnectEverywhere">{{ $t("pages.preferences.sections.security.params.password.dialog.inputs.disconnect") }}</Label>
        </div>

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
