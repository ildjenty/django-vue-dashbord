<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  setup() {
    const { dispatch } = useStore()
    onMounted(() => {
      dispatch('fetchMessage')
    })
  },
})
</script>
