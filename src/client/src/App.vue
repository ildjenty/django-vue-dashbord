<template>
  <div class="dark size-full">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useAppEntryPath } from './composables/useAppEntryPath';

const { provideAppEntryPath } = useAppEntryPath();
provideAppEntryPath();
</script>
