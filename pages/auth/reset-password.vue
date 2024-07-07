<script setup lang="ts">
import AuthCard from "~/components/specifics/auth/AuthCard.vue";
import {useToast} from "~/components/ui/toast";
import {useI18n} from "#i18n";
import {toTypedSchema} from "@vee-validate/zod";
import * as z from "zod";
import type {GenericObject} from "vee-validate";

definePageMeta({
  layout: 'auth',
});

const { toast } = useToast();
const { t } = useI18n();
useHead({
  title: `Eventoria · ${t("pages.auth.resetPassword.title")}`,
});

const schema = toTypedSchema(z.object({
  password: z.string().min(1).regex(passwordRegExp),
  confirm: z.string().min(1).regex(passwordRegExp)
}));
const logoutFromEverywhere = ref<boolean>(true);

const handleSubmit = ({ password, confirm }: GenericObject) => {
  if (password !== confirm) return toast({
    title: t("pages.auth.resetPassword.toasts.inconsistent.title"),
    description: t("pages.auth.resetPassword.toasts.inconsistent.description"),
    variant: "destructive",
  });
  toast({
    title: t("pages.auth.resetPassword.toasts.passwordUpdated.title"),
    description: t("pages.auth.resetPassword.toasts.passwordUpdated.description"),
  });
};
</script>

<template>
  <AuthCard :schema="schema" @submit="handleSubmit">
    <template #title>{{ $t("pages.auth.resetPassword.title") }}</template>
    <template #description>{{ $t("pages.auth.resetPassword.description") }}</template>
    <template #formContent>
      <FormField name="password" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>{{ $t("pages.auth.resetPassword.inputs.password.label")}}</FormLabel>
          <FormControl>
            <Input v-bind="componentField" type="password" :placeholder="$t('pages.auth.resetPassword.inputs.password.placeholder')" />
          </FormControl>
        </FormItem>
      </FormField>
      <FormField name="confirm" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>{{ $t("pages.auth.resetPassword.inputs.confirm.label") }}</FormLabel>
          <FormControl>
            <Input v-bind="componentField" type="password" :placeholder="$t('pages.auth.resetPassword.inputs.confirm.placeholder')" />
          </FormControl>
        </FormItem>
      </FormField>
      <FormField name="logoutFromEverywhere" v-slot="{ componentField }">
        <FormItem class="md:col-span-2 flex items-end gap-3 mt-4">
          <FormControl>
            <Checkbox v-bind="componentField" :checked="logoutFromEverywhere" @update:checked="logoutFromEverywhere = $event" />
          </FormControl>
          <FormLabel>{{ $t("pages.auth.resetPassword.inputs.disconnectFromEverywhere") }}</FormLabel>
        </FormItem>
      </FormField>
    </template>
    <template #action>{{ $t("pages.auth.resetPassword.btn") }}</template>
  </AuthCard>
</template>
