<template>
  <div class="size-full light-base-elm dark:dark-base-elm">
    <PageHeader />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import PageHeader from './PageHeader.vue';

export default defineComponent({
  name: 'BasicPage',
  components: {
    PageHeader,
  },
});
</script>
