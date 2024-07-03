<script setup lang="ts">
import {useLocalePath} from "#i18n";
import type {ButtonVariants} from "~/components/ui/button";

const props = defineProps<{
  path?: string;
  danger?: boolean;
}>();

defineEmits(['triggered']);

const localePath = useLocalePath();
const activePath = computed((): string => useRoute().path);
const isActive = computed((): boolean => activePath.value === props.path);
const variant = computed((): ButtonVariants['variant'] => {
  if (props.path) return isActive.value ? 'default' : 'ghost';
  return props.danger ? 'destructive' : 'ghost';
});
</script>

<template>
  <Button class="element" :variant="variant" v-if="!!path" as-child>
    <NuxtLink :to="localePath(path)" @click="$emit('triggered')" v-if="path">
      <slot />
    </NuxtLink>
  </Button>
  <Button class="element" :variant="variant" @click="$emit('triggered')" v-else>
      <slot />
  </Button>
</template>

<style scoped>

</style>
