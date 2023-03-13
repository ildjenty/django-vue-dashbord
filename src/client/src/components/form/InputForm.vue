<template>
  <input
    :type="type"
    :name="name"
    class="base-elm form-value"
    v-model="modelValue"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { stringProps, multiTypeProps } from '@/driver/vh';
import { useModelValue } from '@/composables/useModelValue';

const props = defineProps({
  type: stringProps(),
  name: stringProps(),
  value: multiTypeProps([Number, String]),
});
const emits = defineEmits(['change']);
const modelValue = useModelValue(props, emits);
</script>
