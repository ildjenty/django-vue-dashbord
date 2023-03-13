import { computed } from 'vue';

export const useModelValue = (props, emits, eventName = 'change') =>
  computed({
    get: () => props.value,
    set: (value) => emits(eventName, value),
  });
