<script setup lang="ts">
import {useLocalePath, useI18n} from "#i18n";
import {ArrowLeft} from "@iconoir/vue";
import {Button} from "~/components/ui/button";
import {Card, CardHeader, CardContent, CardTitle, CardDescription} from "~/components/ui/card";
import {Separator} from "~/components/ui/separator";
import {PinInput, PinInputGroup, PinInputInput, PinInputSeparator} from "~/components/ui/pin-input";
import {useToast} from "~/components/ui/toast";

definePageMeta({
  layout: 'auth',
});

const localePath = useLocalePath();
const { toast } = useToast();
const { t } = useI18n();

useHead({
  title: `Eventoria · ${t("pages.auth.otp.title")}`,
});

const canResend = ref<boolean>(false);
const value = ref<string[]>([]);
const handleComplete = () => {
  toast({
    title: t("pages.auth.otp.toasts.emailVerified.title"),
    description: t("pages.auth.otp.toasts.emailVerified.description"),
  });
};
</script>

<template>
  <Card class="card">
    <CardHeader>
      <Button variant="ghost" class="self-start -ml-3" as-child>
        <NuxtLink :to="localePath('/')">
          <ArrowLeft class="mr-2" />
          <span>{{ $t("generics.buttons.back") }}</span>
        </NuxtLink>
      </Button>
      <CardTitle class="my-2">{{ $t("pages.auth.otp.title") }}</CardTitle>
      <CardDescription>{{ $t("pages.auth.otp.description") }}</CardDescription>
    </CardHeader>
    <Separator />
    <CardContent class="pt-6 flex justify-center">
      <PinInput
          id="pin-input"
          v-model="value"
          placeholder="○"
          @complete="handleComplete"
      >
        <PinInputGroup>
          <template v-for="(id, index) in 6" :key="id">
            <PinInputInput
                :index="index"
                :class="{ 'rounded-r-md': index === 2, 'rounded-l-md border-l': index === 3}"
            />
            <template v-if="index === 2">
              <PinInputSeparator />
            </template>
          </template>
        </PinInputGroup>
      </PinInput>
    </CardContent>
    <CardFooter class="flex justify-center">
      <Button variant="link" :disabled="!canResend">{{ $t("pages.auth.otp.noCodeReceived") }}</Button>
    </CardFooter>
  </Card>
</template>

<style scoped lang="sass">
.card
  width: min(100% - 3rem, 30rem)
  @apply flex flex-col
</style>
