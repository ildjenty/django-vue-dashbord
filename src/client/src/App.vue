<template>
  <div class="dark size-full">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import useAppInit from '@/composables/useAppInit';

const { resolveInitialPage } = useAppInit();

onMounted(() => {
  resolveInitialPage();
});
</script>
