<template>
  <label class="form-label">{{ label }}</label>
</template>

<script>
import { defineComponent } from 'vue';
import { stringProps } from '@/driver/vh';

export default defineComponent({
  name: 'FormLabel',
  props: {
    label: stringProps(),
  },
});
</script>
