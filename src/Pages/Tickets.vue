<template>
  <AppLayout pageTitle="Билеты и часы работы">
    <div class="">
      <div class="p-6 border-2 border-[#011418] rounded-3xl">
        <h2
          class="uppercase text-center mb-4 font-bold text-[#011418] text-2xl"
        >
          {{ isLogin ? "Регистрация" : "Авторизация" }}
        </h2>

        
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";

export default {
  components: {
    AppLayout,
  },
};
</script>