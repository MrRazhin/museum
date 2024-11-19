<template>
  <div class="w-full">
    <div
      class="w-full grid grid-cols-[repeat(6,minmax(0,1fr))] lg:grid-cols-12 gap-x-0.5 lg:gap-x-1 gap-y-0.5 lg:gap-y-1 items-center"
    >
      <div class="col-start-1 col-end-7 md:col-end-9 lg:row-start-1">
        <div class="-mb-4 lg:mb-0 w-full">
          <div class="w-full">
            <div class="flex flex-col gap-0.5">
              <div class="overflow-hidden w-full border-none rounded-3xl">
                <div class="relative overflow-hidden aspect-video">
                  <img alt="" :src="image" class="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="md:col-start-7 md:col-end-13 col-start-1 col-end-7 lg:row-start-1 z-10"
      >
        <div
          class="overflow-hidden bg-[#011418] p-10 mx-1 lg:mx-0 text-on-surface bg-surface w-full border-none rounded-3xl"
        >
          <div class="flex flex-col items-start">
            <h2
              class="text-2xl font-semibold text-[#fecd8c] lg:text-3xl group first:mt-0 mt-2 mb-1 text-theme uppercase"
            >
              {{ title }}
            </h2>
            <p
              class="text-base text-white font-normal lg:text-lg group max-w-[70ch] last:mb-0 mb-0.5"
              v-for="(text, index) in description"
              :key="index"
            >
              {{ text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "image"],
};
</script>