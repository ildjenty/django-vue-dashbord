<template>
  <div class="dark size-full">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useAppEntryPath } from './composables/useAppEntryPath';

export default defineComponent({
  name: 'App',
  setup() {
    const { dispatch } = useStore();
    const { provideAppEntryPath } = useAppEntryPath();

    provideAppEntryPath();
    onMounted(() => {
      dispatch('fetchMessage');
    });
  },
});
</script>
