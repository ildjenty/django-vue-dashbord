<template>
  <button
    class="base-button"
    :class="themeBgClass"
    :type="type"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { unionProps, funcProps } from '@/driver/vh';

const props = defineProps({
  type: unionProps(String, ['button', 'submit']),
  theme: unionProps(String, ['main', 'base'], 'main'),
  themePriority: unionProps(String, ['primary', 'secondary'], 'primary'),
  onClick: funcProps(),
});

const themeBgClass = computed(() => `bg-${props.theme}-${props.themePriority}`);
</script>
