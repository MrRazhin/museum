<template>
  <div
    class="w-full relative md:h-[600px] h-[420px] overflow-hidden rounded-3xl"
  >
    <div
      class="bg-cover bg-center md:h-[600px] h-[420px] cursor-pointer rounded-3xl overflow-hidden duration-500 hover:scale-110 transform transition"
      :style="`background-image: url('${image}');`"
    ></div>
    <div class="absolute top-0 p-4" v-if="type">
      <div
        class="text-white border-2 rounded-md border-white px-2 uppercase text-lg font-bold"
      >
        <span v-if="type == 'collection'">КОЛЛЕКЦИЯ</span>
        <span v-else-if="type == 'exhibition'">выставка</span>
        <span v-else-if="type == 'activity'">активность</span>
      </div>
    </div>
    <div class="absolute bottom-0 w-full p-4">
      <div class="w-full flex items-center justify-between">
        <slot></slot>

        <JetButton class="hidden md:block" v-if="actionButton">{{
          actionButton.title
        }}</JetButton>
      </div>
    </div>
  </div>
</template>

<script>
import JetButton from "./JetButton.vue";
export default {
  components: { JetButton },
  props: {
    image: {
      default: "",
    },
    actionButton: {
      default: "",
    },
    type: {
      default: "",
    },
  },
};
</script>