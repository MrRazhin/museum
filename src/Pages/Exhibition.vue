<template>
  <AppLayout
    pageTitle="Выставки и мероприятия"
    page-sub-title="Откройте для себя выставки и мероприятия в музее Кирилла Ражина"
    body-class=""
    main-class=""
    headerImage="https://cdni.rbth.com/rbthmedia/images/all/2016/12/15/06_roma-aeterna_tass_18871928_b.jpg"
  >
    <div
      class="py-10 sm:px-6 lg:px-12 max-w-[75rem] mx-auto overflow-hidden px-4 h-full grid grid-col gap-10"
    >
      <div class="grid grid-col gap-10">
        <Banner
          :actionButton="{ title: 'Перейти на страницу', route: '/' }"
          type="exhibition"
          image="https://sun9-57.userapi.com/impg/KG__q9yJySZPNDlLhzTF4_d-ulAZVpS_M_qpIQ/kdeISMwoZVU.jpg?size=1216x832&quality=95&sign=c56726f86f7795f787d18999ce347dfa&type=album"
        >
          <div class="font-bold uppercase text-2xl md:text-4xl text-white">
            О кирилле ражине
          </div>
        </Banner>
        <div class="grid md:grid-cols-2 gap-5">
          <Banner
            type="collection"
            image="https://sun9-66.userapi.com/impg/B09nLPnzFJOg7iIE8RbifXWUOBh98WCOB5k22w/iNYhfNnOFTM.jpg?size=1024x1024&quality=95&sign=814e5891c8f4e66bf161dee749fea705&type=album"
          >
            <div class="font-bold uppercase text-2xl md:text-4xl text-white">
              О кирилле ражине
            </div>
          </Banner>
          <Banner
            type="collection"
            image="https://sun9-51.userapi.com/impg/LATyfvFmz0UputqRirLxzr-3VvY3xb3MBdGIug/9TmzJ2m_FVg.jpg?size=1024x1024&quality=95&sign=958490b60cb5c60899e1c9b3c434848a&type=album"
          >
            <div class="font-bold uppercase text-2xl md:text-4xl text-white">
              О кирилле ражине
            </div>
          </Banner>
        </div>
      </div>
    </div>
    <div>
      <div
        class="my-10 flex flex-col md:flex-row items-center md:justify-between mb-4 sm:px-6 lg:px-12 max-w-[75rem] mx-auto px-4"
      >
        <div class="uppercase text-2xl md:text-4xl font-bold">Деятельность</div>
      </div>

      <ScrollGallery />
    </div>
    <div class="bg-[#c4cb93]">
      <div
        class="py-10 mt-10 sm:px-6 lg:px-12 max-w-[75rem] mx-auto overflow-hidden px-4 h-full grid grid-col gap-10 bg-[#c4cb93]"
      >
        <div class="grid grid-col gap-10">
          <div class="grid md:grid-cols-2 gap-5">
            <Banner
              type="collection"
              image="https://sun9-66.userapi.com/impg/zhqseU9V-SCl5bPq_3-N2ZBISAo_rVGBZiLK4g/xKmBwCKiv0E.jpg?size=1024x1024&quality=95&sign=25a5eb812ae9bb835760e21389670329&type=album"
            >
              <div class="font-bold uppercase text-2xl md:text-4xl text-white">
                О кирилле ражине
              </div>
            </Banner>
            <Banner
              type="collection"
              image="https://sun9-4.userapi.com/impg/_qbrkOARwUvMRjwNcTTrWcO2-oz_rVnPuNuMbg/BwlVOK9UdHE.jpg?size=1024x1024&quality=95&sign=086e10216c9c7afbabdb14c92d05f3fb&type=album"
            >
              <div class="font-bold uppercase text-2xl md:text-4xl text-white">
                О кирилле ражине
              </div>
            </Banner>
          </div>
          <Banner
            :actionButton="{ title: 'Перейти на страницу', route: '/' }"
            type="exhibition"
            image="https://sun9-76.userapi.com/impg/Lgp-9l7UL7NlDpwQMdtSSFPsqhPLTaK0sf-riQ/nw8_BkDJgRA.jpg?size=1216x832&quality=95&sign=f416093d74df7f4a02ee80fbc3f252b8&type=album"
          >
            <div class="font-bold uppercase text-2xl md:text-4xl text-white">
              О кирилле ражине
            </div>
          </Banner>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import Banner from "@/components/Banner.vue";
import ScrollGallery from "@/components/ScrollGallery.vue";
export default {
  components: {
    AppLayout,
    Banner,
    ScrollGallery,
  },
};
</script>