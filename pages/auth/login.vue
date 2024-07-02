<script setup lang="ts">
import AuthCard from "~/components/specifics/auth/AuthCard.vue";
import {FormField, FormItem, FormLabel, FormControl} from "~/components/ui/form";
import {Input} from "~/components/ui/input";
import {Checkbox} from "~/components/ui/checkbox";
import {toTypedSchema} from "@vee-validate/zod";
import * as z from "zod";
import {passwordRegExp, userRegExp} from "~/utils/regexp.utils";
import {useLocalePath, useI18n} from "#i18n";
import {type GenericObject} from "vee-validate";
import {useToast} from "~/components/ui/toast";

definePageMeta({
  layout: 'auth',
});

const localePath = useLocalePath();
const { t } = useI18n();
const { toast } = useToast();

const schema = toTypedSchema(z.object({
  username: z.string().min(1).regex(userRegExp),
  password: z.string().min(1).regex(passwordRegExp),
}));
const keepLoggedIn = ref<boolean>(true);
const handleSubmit = ({ username, password }: GenericObject) => {
  toast({
    title: t("pages.auth.login.toasts.userLoggedIn.title"),
    description: t("pages.auth.login.toasts.userLoggedIn.description"),
  });
  console.table({
    username,
    password: password.split('').map(() => '·').join(''),
  });
}
</script>

<template>
  <AuthCard :schema="schema" @submit="handleSubmit">
    <template #title>{{ $t("pages.auth.login.title") }}</template>
    <template #description>{{ $t("pages.auth.login.description") }}</template>
    <template #formContent>
      <FormField name="username" v-slot="{ componentField }">
        <FormItem class="md:col-span-2">
          <FormLabel>{{ $t("pages.auth.login.inputs.username.label") }}</FormLabel>
          <FormControl>
            <Input v-bind="componentField" :placeholder="$t('pages.auth.login.inputs.username.placeholder')" />
          </FormControl>
        </FormItem>
      </FormField>
      <FormField name="password" v-slot="{ componentField }">
        <FormItem class="md:col-span-2">
          <FormLabel>{{ $t("pages.auth.login.inputs.password.label") }}</FormLabel>
          <FormControl>
            <Input type="password" v-bind="componentField" :placeholder="$t('pages.auth.login.inputs.password.placeholder')" />
          </FormControl>
        </FormItem>
      </FormField>
      <FormField name="keepLoggedIn" v-slot="{ componentField }">
        <FormItem class="md:col-span-2 flex items-end gap-3 mt-4">
          <FormControl>
            <Checkbox v-bind="componentField" :checked="keepLoggedIn" @update:checked="keepLoggedIn = $event" />
          </FormControl>
          <FormLabel>{{ $t("pages.auth.login.inputs.keepMeLoggedIn") }}</FormLabel>
        </FormItem>
      </FormField>
    </template>
    <template #action>{{ $t("pages.auth.login.btn") }}</template>
    <template #nextPage><NuxtLink :to="localePath('/auth/register')">{{ $t("pages.auth.login.notRegistered") }}</NuxtLink></template>
  </AuthCard>
</template>
