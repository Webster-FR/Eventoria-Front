<script setup lang="ts">
import {Toaster} from "~/components/ui/toast";
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <Toaster />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
