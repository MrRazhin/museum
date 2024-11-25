<template>
  <AppLayout
    pageTitle="Посмотрите наши основные моменты"
    page-sub-title="Выборка из нашей коллекции"
    headerImage="https://sun9-24.userapi.com/impg/VqfSmwebHHoyebrT8OFLSk7dLNlImTFvbdjnzQ/kncgWZigttM.jpg?size=1216x832&quality=95&sign=e198041316e60041ac1a57e288a1c01f&type=album"
  >
    <div class="grid grid-cols-3 gap-5">
      <router-link
        v-for="banner in data"
        :key="banner.id"
        :to="`/Collection/:${banner.id}`"
      >
        <Banner
          body-class="!h-[460px]"
          :image="`http://localhost:5000/${banner.img}`"
        >
          <div class="font-bold uppercase text-lg l text-white">
            {{ banner.name }}
          </div>
        </Banner>
      </router-link>
    </div>
  </AppLayout>
</template>


<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import Banner from "@/components/Banner.vue";
import axios from "axios";

export default {
  components: {
    AppLayout,
    Banner,
  },
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    console.log(process.env);

    axios.get(process.env.VUE_APP_API_URL + "api/painting").then((response) => {
      console.log(response.data);
      this.data = response.data;
    });
  },
};
</script>