<template>
  <div
    class="relative mx-auto transition-all duration-500"
    :class="{ 'max-w-full': isExpanded, 'max-w-xl': !isExpanded }"
  >
    <div class="overflow-hidden">
      <img
        :src="imageSrc"
        :style="{ transform: `scale(${scale})` }"
        alt="Art"
        class="w-full transition-transform duration-300"
      />
    </div>
    <button
      @click="toggleExpand"
      class="absolute top-2 right-2 bg-[#011418] hover:bg-white hover:text-[#011418] border-2 border-white text-white p-2 rounded-md shadow"
    >
      <svg
        v-if="!isExpanded"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
        />
      </svg>
    </button>
    <div class="absolute bottom-2 right-2 flex flex-col space-y-2">
      <button
        @click="zoomIn"
        class="bg-[#011418] hover:bg-white hover:text-[#011418] border-2 border-white text-white p-2 rounded-md shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <button
        @click="zoomOut"
        class="bg-[#011418] hover:bg-white hover:text-[#011418] border-2 border-white text-white p-2 rounded-md shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imageSrc"],
  data() {
    return {
      isExpanded: false,
      scale: 1,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    zoomIn() {
      this.scale += 0.5;
    },
    zoomOut() {
      if (this.scale > 1) {
        this.scale -= 0.5;
      }
    },
  },
};
</script>

<style>
/* Нет необходимости в дополнительных стилях с использованием Tailwind CSS */
</style>