<template>
  <AppLayout>
    <template #headerContent>
      <ImageViewerVue
        :is_loading="is_loading"
        :image-src="`http://localhost:5000/${painting?.img}`"
      />
    </template>
    <div class="grid grid-col gap-12">
      <div>
        <h1 class="md:text-4xl text-2xl font-bold">
          Лео Гестель (Вурден, 1881 г. - Хилверсюм, 1941 г.)
        </h1>
        <div class="mt-2">
          <h2 class="md:text-2xl text-xl">
            Женщина в большой шляпе в летнем домике
          </h2>
        </div>
      </div>
      <div class="py-6">
        <div class="text-lg">
          Это Эльза Берг, коллега-художник и друг Лео Гестеля. Художники,
          знавшие друг друга по Амстердаму, работали вместе в Бергене, деревне в
          провинции Северная Голландия, популярной среди художников. Берг держит
          сигарету, что многие считали неженственным и спорным в то время.
          Однако ее смелость идеально соответствовала экспериментальному стилю
          Гестеля — его яркая цветная картина скорее упражнение в последнем
          угловатом стиле кубизма, чем реалистичный портрет.
        </div>
        <SecondaryButtonVue class="mt-4"
          >Это произведение искусства на вашей стене</SecondaryButtonVue
        >
      </div>
    </div>
    <div class="grid grid-col gap-5">
      <div class="">
        <div class="text-lg">Создатель</div>
        <div class="text-lg font-bold">
          Лео Гестель (Вурден, 1881 г. - Хилверсюм, 1941 г.)
        </div>
      </div>
      <div class="">
        <div class="text-lg">Заголовок</div>
        <div class="text-lg font-bold">
          Женщина в большой шляпе в летнем домике
        </div>
      </div>
      <div class="">
        <div class="text-lg">Дата</div>
        <div class="text-lg font-bold">1913</div>
      </div>
      <HidingBlockVue>
        <template #title="{ isOpen }">
          <div
            class="items-center flex space-x-2 w-full text-lg text-[#011418]"
          >
            <div class="uppercase">Подробнее</div>
            <div v-if="!isOpen">
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
            </div>
            <div v-else>
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
                  d="M5 12h14"
                />
              </svg>
            </div>
          </div>
        </template>
        <div class="grid grid-col gap-5">
          <div class="">
            <div class="text-lg">Коллекция</div>
            <div class="text-lg font-bold">Музей Франса Хальса, Харлем</div>
          </div>
          <div class="">
            <div class="text-lg">Материал</div>
            <div class="text-lg font-bold">
              Масло на холсте | В 98 x Ш 88,5 см
            </div>
          </div>
        </div>
      </HidingBlockVue>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import ImageViewerVue from "@/components/ImageViewer.vue";
import SecondaryButtonVue from "@/components/SecondaryButton.vue";

import HidingBlockVue from "@/components/HidingBlock.vue";
import axios from "axios";

export default {
  components: {
    AppLayout,
    ImageViewerVue,
    SecondaryButtonVue,
    HidingBlockVue,
  },
  data() {
    return {
      painting: null,
      is_loading: false,
    };
  },
  mounted() {
    if (!this.painting) {
      axios
        .get(
          process.env.VUE_APP_API_URL +
            "api/painting/" +
            this.$route.params.id.replace(/\D/g, "")
        )
        .then((response) => {
          console.log(response.data);
          this.painting = response.data;
          this.is_loading = false;
        });
    }
  },
};
</script>