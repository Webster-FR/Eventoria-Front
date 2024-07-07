<script setup lang="ts">
import {Toaster} from "~/components/ui/toast";
import {IconoirProvider} from "@iconoir/vue";
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <Toaster />

    <IconoirProvider :icon-props="{
      'height': '1rem',
      'width': '1rem',
      'stroke-width': '2'
    }">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </IconoirProvider>
  </div>
</template>
