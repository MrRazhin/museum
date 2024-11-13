<template>
  <Teleport to="#modal">
    <transition leave-active-class="duration-75">
      <div
        v-show="show"
        class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-[51]"
        :style="'zIndex: ' + zIndex"
      >
        <transition
          enter-active-class="ease-out duration-100"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="ease-in duration-75"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-show="show"
            class="fixed inset-0 transform transition-all"
            @click="close"
          >
            <div class="absolute inset-0 bg-gray-500 opacity-75" />
          </div>
        </transition>

        <transition
          enter-active-class="ease-out duration-100"
          enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-75"
          leave-from-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            v-show="show"
            class="mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"
            :class="maxWidthClass"
          >
            <slot />
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script>
export default {
  props: {
    show: {
      default: false,
    },
    maxWidth: {
      default: "2xl",
    },
    closeable: {
      default: true,
    },
    zIndex: {
      default: 51,
    },
  },
  emits: ["close"],
  computed: {
    maxWidthClass() {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl",
        "3xl": "sm:max-w-3xl",
      }[this.maxWidth];
    },
  },
  watch: {
    show: {
      immediate: true,
      handler(show) {
        if (show) {
          document.body.style.overflow = "hidden";
        } else {
          setTimeout(() => {
            if (
              !document.querySelectorAll("#modal.vue-portal-target div").length
            ) {
              document.body.style.overflow = null;
            }
          }, 100);
        }
      },
    },
  },

  created() {
    document.addEventListener("keydown", this.closeOnEscape);
  },
  unmounted() {
    console.log("test");
    document.removeEventListener("keydown", this.closeOnEscape);
    setTimeout(() => {
      if (!document.querySelectorAll("#modal.vue-portal-target div").length) {
        document.body.style.overflow = null;
      }
    }, 100);
  },

  methods: {
    close() {
      if (this.closeable) {
        this.$emit("close");
        document.body.style.overflow = null;
      }
    },
    closeOnEscape(e) {
      if (e.key === "Escape" && this.show) {
        this.close();
      }
    },
  },
};
</script>
