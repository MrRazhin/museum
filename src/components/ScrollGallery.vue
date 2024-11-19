<template>
  <div class="flex-1 grow relative h-[31rem]">
    <div class="overflow-hidden">
      <div
        ref="carousel"
        class="flex px-4 space-x-8 scrollbar-hide transition-transform duration-300 ease-out absolute top-0 left-0 bottom-0 right-0 h-full overflow-y-hidden overflow-x-auto"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="w-full cursor-pointer rounded-3xl inline-block min-w-[98%] md:min-w-[25%] h-full"
        >
          <div
            class="relative cursor-pointer rounded-3xl w-full h-[29rem] overflow-hidden aspect-video"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="transform transition h-full w-full duration-300 hover:scale-110"
            />
            <div class="absolute bottom-0 text-white w-full p-4 text-lg">
              <div class="font-bold">{{ image.title }}</div>
              <div>{{ image.subTitle }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-0 flex mt-2 items-center font-bold text-[#011418] justify-end w-full"
    >
      <button class="cursor-pointer" @click="scrollLeft">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button
        class="cursor-pointer font-bold text-[#011418]"
        @click="scrollRight"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
src="../assets/pic1.png"
<script>
export default {
  data() {
    return {
      images: [
        {
          src: "https://sun9-48.userapi.com/impg/3Q2YHPMkFEaZWjqz0pS357VtmvAe9p3Kma62Vw/OMeIVMWbQx8.jpg?size=1024x1024&quality=95&sign=0b9f02d197fae37ba9f2c8c4c524b49c&type=album",
          alt: "Карточка 1",
          title: "Кирилл Ражин (Москва 1816)",
          subTitle: "Пылающий рай",
        },
        {
          src: "https://sun9-66.userapi.com/impg/zhqseU9V-SCl5bPq_3-N2ZBISAo_rVGBZiLK4g/KIMCj180u0U.jpg?size=1024x1024&quality=95&sign=e2680236acd23e08695845ade48b532b&type=album",
          alt: "Карточка 2",
          title: "Кирилл Ражин (Москва 1816)",
          subTitle: "Пылающий рай",
        },
        {
          src: "https://sun9-16.userapi.com/impg/VO1Y9sq-f_jfC3LUkB2Vlsi7uqc6ER9A_oH8tg/tdMd66NkRjc.jpg?size=1024x1024&quality=95&sign=a89ba3a2eba05b6cd5fe6b5807a06bae&type=album",
          alt: "Карточка 3",
          title: "Кирилл Ражин (Москва 1816)",
          subTitle: "Пылающий рай",
        },
        {
          src: "https://sun9-62.userapi.com/impg/c1ViI0EB8abFXxFkU9trW5pOhbAe9PmQM6K9Wg/9xm-zSUES4U.jpg?size=1024x1024&quality=95&sign=ffd5e63e434be6e5e0b24079a36deaf6&type=album",
          alt: "Карточка 1",
          title: "Кирилл Ражин (Москва 1816)",
          subTitle: "Пылающий рай",
        },
        {
          src: "https://sun9-23.userapi.com/impg/22gtmkiHvLHLcWkhHcrUe7zLXz1wVlzDJDSh3Q/6FldFenjcnw.jpg?size=1024x1024&quality=95&sign=9e7fe0ea142d05548dcc75112879ec06&type=album",
          alt: "Карточка 2",
          title: "Кирилл Ражин (Москва 1816)",
          subTitle: "Пылающий рай",
        },
        {
          src: "https://sun9-62.userapi.com/impg/c1ViI0EB8abFXxFkU9trW5pOhbAe9PmQM6K9Wg/9xm-zSUES4U.jpg?size=1024x1024&quality=95&sign=ffd5e63e434be6e5e0b24079a36deaf6&type=album",
          alt: "Карточка 1",
          title: "Кирилл Ражин (Москва 1816)",
          subTitle: "Пылающий рай",
        },
        {
          src: "https://sun9-23.userapi.com/impg/22gtmkiHvLHLcWkhHcrUe7zLXz1wVlzDJDSh3Q/6FldFenjcnw.jpg?size=1024x1024&quality=95&sign=9e7fe0ea142d05548dcc75112879ec06&type=album",
          alt: "Карточка 2",
          title: "Кирилл Ражин (Москва 1816)",
          subTitle: "Пылающий рай",
        },
      ],
      offset: 0,
    };
  },
  methods: {
    scrollLeft() {
      const carousel = this.$refs.carousel;
      const scrollAmount = carousel.offsetWidth; // Прокручивать ширину одного элемента
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    },
    scrollRight() {
      const carousel = this.$refs.carousel;
      const scrollAmount = carousel.offsetWidth; // Прокручивать ширину одного элемента
      carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>