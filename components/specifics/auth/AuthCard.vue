<script setup lang="ts" generic="TInput, TOutput">
import {Button} from "~/components/ui/button";
import {Separator} from "~/components/ui/separator";
import {Card, CardHeader, CardContent, CardTitle, CardDescription} from "~/components/ui/card";
import {ArrowLeft} from "@iconoir/vue";
import {type TypedSchema, useForm} from "vee-validate";
import {useLocalePath} from "#i18n";

const props = defineProps<{
  submitDisabled?: boolean;
  schema: TypedSchema<TInput, TOutput>;
}>();
const emit = defineEmits(['submit']);

const localePath = useLocalePath();

const { handleSubmit } = useForm({
  validationSchema: props.schema,
});
const onSubmit = handleSubmit((values) => emit('submit', values));
</script>

<template>
  <Card class="card">
    <CardHeader>
      <Button variant="ghost" type="button" class="self-start -ml-3" as-child>
        <NuxtLink :to="localePath('/')">
          <ArrowLeft class="mr-2" />
          <span>{{ $t("generics.buttons.back") }}</span>
        </NuxtLink>
      </Button>
      <CardTitle class="my-2">
        <slot name="title" />
      </CardTitle>
      <CardDescription>
        <slot name="description" />
      </CardDescription>
    </CardHeader>

    <Separator />

    <CardContent class="pt-6">
      <form @submit="onSubmit" class="flex flex-col items-center gap-6">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
          <slot name="formContent" />
        </div>

        <Button type="submit" :disabled="submitDisabled">
          <slot name="action" />
        </Button>
        <Button type="button" variant="link" as-child>
          <slot name="nextPage" />
        </Button>
      </form>
    </CardContent>
  </Card>
</template>

<style scoped lang="sass">
.card
  width: min(100% - 3rem, 30rem)
  @apply flex flex-col
</style>
