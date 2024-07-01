<script setup lang="ts">
import AuthCard from "~/components/specifics/auth/AuthCard.vue";
import * as z from "zod";
import {toTypedSchema} from "@vee-validate/zod";
import {Input} from "~/components/ui/input";
import {FormField, FormItem, FormControl, FormLabel} from "~/components/ui/form";
import {passwordRegExp, userRegExp} from "~/utils/regexp.utils";
import type {GenericObject} from "vee-validate";
import {useToast} from "~/components/ui/toast";

definePageMeta({
  layout: 'auth',
});

const localePath = useLocalePath();
const { t } = useI18n();

const schema = toTypedSchema(z.object({
  username: z.string().min(1).regex(userRegExp),
  displayName: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(1).regex(passwordRegExp),
}));
const { toast } = useToast();

const termsAndConditions = ref<boolean>(false);

const handleSubmit = async ({ username, displayName, email, password }: GenericObject) => {
  toast({
    title: t("pages.auth.register.toasts.userCreated.title"),
    description: t("pages.auth.register.toasts.userCreated.description")
  });
  console.table({
    username,
    displayName,
    email,
    password: password.split('').map(() => '·').join(''),
  });
};
</script>

<template>
  <AuthCard :schema="schema" @submit="handleSubmit" :submit-disabled="!termsAndConditions">
    <template #title>{{ $t('pages.auth.register.title') }}</template>
    <template #description>{{ $t("pages.auth.register.description") }}</template>
    <template #formContent>
      <FormField name="username" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>{{ $t('pages.auth.register.inputs.username.label') }}</FormLabel>
          <FormControl>
            <Input v-bind="componentField" :placeholder="$t('pages.auth.register.inputs.username.placeholder')" />
          </FormControl>
        </FormItem>
      </FormField>
      <FormField name="email" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>{{ $t('pages.auth.register.inputs.email.label') }}</FormLabel>
          <FormControl>
            <Input
                type="email"
                v-bind="componentField"
                :placeholder="$t('pages.auth.register.inputs.email.placeholder')"
            />
          </FormControl>
        </FormItem>
      </FormField>
      <FormField name="displayName" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>{{ $t('pages.auth.register.inputs.displayName.label') }}</FormLabel>
          <FormControl>
            <Input v-bind="componentField" :placeholder="$t('pages.auth.register.inputs.displayName.placeholder')" />
          </FormControl>
        </FormItem>
      </FormField>
      <FormField name="password" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>{{ $t('pages.auth.register.inputs.password.label') }}</FormLabel>
          <FormControl>
            <Input
                type="password"
                v-bind="componentField"
                :placeholder="$t('pages.auth.register.inputs.password.placeholder')"
            />
          </FormControl>
        </FormItem>
      </FormField>
      <FormField name="termsAndConditions" v-slot="{ componentField }">
        <FormItem class="md:col-span-2 flex items-end gap-3 mt-4">
          <FormControl>
            <Checkbox v-bind="componentField" :checked="termsAndConditions" @update:checked="termsAndConditions = $event" />
          </FormControl>
          <FormLabel>{{ $t("pages.auth.register.inputs.termsAndConditions") }}</FormLabel>
        </FormItem>
      </FormField>
    </template>
    <template #action>{{ $t('pages.auth.register.btn') }}</template>
    <template #nextPage><NuxtLink :to="localePath('/auth/login')">{{ $t('pages.auth.register.alreadyRegistered') }}</NuxtLink></template>
  </AuthCard>
</template>

<style scoped>

</style>
