<script setup lang="ts">
import {useLocalePath} from "#i18n";
import {TopBar} from "~/components/globals/navigation";

const localePath = useLocalePath();
</script>

<template>
  <div class="wrapper layout-wrapper">
    <TopBar />

    <main class="md:pt-20 md:min-h-dvh">
      <slot />
    </main>
  </div>
</template>
