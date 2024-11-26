<template>
  <label class="block font-bold text-base text-gray-900 truncate">
    <span v-if="value">{{ value }}</span>
    <span v-else><slot></slot></span>
  </label>
</template>

<script>
export default {
  props: ["value"],
};
</script>
