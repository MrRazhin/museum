<template>
  <div class="p-6 border-2 border-[#011418] rounded-3xl">
    <h2 class="uppercase text-center mb-4 font-bold text-[#011418] text-2xl">
      {{ isLogin ? "Регистрация" : "Авторизация" }}
    </h2>

    <form class="flex flex-col">
      <div class="bg-white p-3 border-transparent border-none rounded-xl mb-4">
        <input
          v-model="email"
          aria-label="Email address"
          type="email"
          placeholder="example@email.com"
          required=""
          class="w-full bg-transparent placeholder:text-gray200 text-body font-body lg:text-desktop-body lg:font-body"
        />
      </div>
      <div class="bg-white p-3 border-transparent border-none rounded-xl mb-4">
        <input
          v-model="password"
          aria-label="Email address"
          type="password"
          placeholder="12345"
          required=""
          class="w-full bg-transparent placeholder:text-gray200 text-body font-body lg:text-desktop-body lg:font-body"
        />
      </div>
      <div class="flex items-center justify-between space-x-4">
        <div class="flex items-center space-x-2">
          <div>{{ isLogin ? "Есть аккаунт?" : "Нет аккаунта?" }}</div>
          <div
            class="font-bold underline cursor-pointer"
            @click="isLogin = !isLogin"
          >
            {{ isLogin ? "Войти" : "Зарегистрироваться" }}
          </div>
        </div>
        <SecondaryButton @click="authOrRegistration" class=""
          ><div class="mx-auto">
            {{ isLogin ? "Зарегистрироваться" : "Войти" }}
          </div></SecondaryButton
        >
      </div>
    </form>
  </div>
</template>

<script>
import JetButton from "@/components/JetButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import { check, login, registration } from "@/http/userApi";
import AppLayout from "@/Layouts/AppLayout.vue";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { AppLayout, SecondaryButton, JetButton },
  data() {
    return {
      isLogin: false,
      email: null,
      password: null,
      data: null,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["login", "logout"]),
    async authOrRegistration() {
      try {
        if (this.isLogin) {
          const response = await registration(this.email, this.password);
          this.login(response);
        } else {
          const response = await login(this.email, this.password);
          this.login(response);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  async created() {
    this.isLoading = true;
    if (!this.data) {
      try {
        this.data = await check();
        this.isLoading = false;
      } catch (e) {
        console.log(e);
        this.isLoading = false;
      }
    }
  },
};
</script>