<template>
  <div class="form-control" :class="direction === 'row' || 'flex-col'">
    <FormLabel :label="label" />
    <div>
      <InputForm :type="type" :name="name" :value="modelValue" />
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
import InputForm from '@/components/form/InputForm.vue';
import FormLabel from '@/components/form/FormLabel.vue';
import { stringProps, multiTypeProps, unionProps } from '@/driver/vh';
import { useModelValue } from '@/composables/useModelValue';

const props = defineProps({
  type: stringProps(),
  name: stringProps(),
  label: stringProps(),
  value: multiTypeProps([Number, String]),
  direction: unionProps(String, ['row', 'col'], 'row'),
});
const emits = defineEmits(['change']);
const modelValue = useModelValue(props, emits);
</script>
