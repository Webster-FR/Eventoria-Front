<script setup lang="ts">
import AuthCard from "~/components/specifics/auth/AuthCard.vue";
import * as z from "zod";
import {toTypedSchema} from "@vee-validate/zod";
import {Input} from "~/components/ui/input";
import {FormField, FormItem, FormControl, FormLabel} from "~/components/ui/form";
import {passwordRegExp, userRegExp} from "~/utils/regexp.utils";
import type {GenericObject} from "vee-validate";

definePageMeta({
  layout: 'auth',
});

const localePath = useLocalePath();

const schema = toTypedSchema(z.object({
  username: z.string().min(1).regex(userRegExp),
  displayName: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(1).regex(passwordRegExp),
}));

const handleSubmit = async ({ username, displayName, email, password }: GenericObject) => {
  const pass = [];
  for (let i = 0; i < password.length; ++i) pass.push('·');

  console.table({
    username,
    displayName,
    email,
    password: pass.join(''),
  });
};
</script>

<template>
  <AuthCard :schema="schema" @submit="handleSubmit">
    <template #title>{{ $t('pages.auth.register.title') }}</template>
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
    </template>
    <template #action>{{ $t('pages.auth.register.btn') }}</template>
    <template #nextPage><NuxtLink :to="localePath('/auth/login')">{{ $t('pages.auth.register.alreadyRegistered') }}</NuxtLink></template>
  </AuthCard>
</template>

<style scoped>

</style>
