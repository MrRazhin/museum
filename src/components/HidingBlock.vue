<template>
  <div>
    <div
        class="flex items-center font-bold cursor-pointer select-none space-x-2 justify-between"
        @click="toggleContent"
    >
      <slot :isOpen="isOpen" name="title"></slot>
    </div>
    <transition
        enter-active-class="opacity-100 ease-out duration-200"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-[1000px]"
        leave-active-class="opacity-100 ease-in duration-200"
        leave-from-class="opacity-100 max-h-[1000px]"
        leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="isOpen" class="mt-2">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleContent() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    index() {
      this.isOpen = false;
    },
  },
};
</script>
