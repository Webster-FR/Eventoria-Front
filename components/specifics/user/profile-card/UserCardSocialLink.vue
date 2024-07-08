<script setup lang="ts">
import {Instagram} from "@iconoir/vue";
import {Button} from "~/components/ui/button";
import {h} from "vue";
import {type SocialType, SocialTypeRepresentation} from "~/components/specifics/user/profile-card/";

const props = defineProps<{
  link?: string;
  type: SocialType;
}>();

const icon = h(SocialTypeRepresentation[props.type].icon, {
  class: "mr-2"
});
</script>

<template>
  <Button variant="link" class="-ml-4" as-child v-if="link">
    <NuxtLink target="_blank" :to="`${SocialTypeRepresentation[type].link}/${link}`">
      <icon />
      <span><slot />{{ link }}</span>
    </NuxtLink>
  </Button>
</template>

<style scoped>

</style>
