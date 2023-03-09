<template>
  <div class="about">メッセージ:{{ message }}</div>
  <button type="button" @click="onClick">クリックしてpost</button>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'About',
  setup() {
    const { getters, dispatch } = useStore();
    return {
      message: computed(() => getters.message),
      onClick() {
        dispatch('sendDateTime');
      },
    };
  },
});
</script>
