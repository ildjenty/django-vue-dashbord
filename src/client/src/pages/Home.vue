<template>
  <div class="home light-base-elm dark:dark-base-elm">
    メッセージ:{{ message }}
  </div>
  <button type="button" @click="onClick">クリックしてpost</button>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Home',
  setup() {
    const { getters, dispatch } = useStore();
    return {
      message: computed(() => getters.message),
      onClick() {
        dispatch('sendDateTime');
      },
      changeValue,
    };
  },
});
</script>
