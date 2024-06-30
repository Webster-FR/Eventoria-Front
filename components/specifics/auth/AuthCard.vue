<script setup lang="ts" generic="TInput, TOutput">
import {Button} from "~/components/ui/button";
import {Card, CardHeader, CardContent, CardTitle} from "~/components/ui/card";
import {type TypedSchema, useForm} from "vee-validate";

const { schema } = defineProps<{
  schema: TypedSchema<TInput, TOutput>;
}>();
const emit = defineEmits(['submit']);

const { handleSubmit } = useForm({
  validationSchema: schema,
});
const onSubmit = handleSubmit((values) => emit('submit', values));
</script>

<template>
  <Card class="card">
    <CardHeader>
      <CardTitle>
        <slot name="title" />
      </CardTitle>
    </CardHeader>

    <CardContent>
      <form @submit="onSubmit" class="flex flex-col items-center gap-6">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
          <slot name="formContent" />
        </div>

        <Button type="submit">
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
