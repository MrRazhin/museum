<template>
  <div
    class="p-6 border-2 border-[#011418] rounded-3xl"
    :class="{ '!border-white bg-[#011418]': darkMode }"
  >
    <h2
      class="uppercase text-center mb-4 font-bold text-[#011418] text-2xl"
      :class="{ '!text-white': darkMode }"
    >
      {{ isLogin ? "Регистрация" : "Авторизация" }}
    </h2>

    <form class="flex flex-col">
      <LabelVue class="px-2">Email </LabelVue>
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
      <LabelVue class="px-2">Пароль </LabelVue>
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
      <LabelVue v-if="isLogin" class="px-2">Номер телефона </LabelVue>
      <div
        v-if="isLogin"
        class="bg-white p-1 border-transparent border-none rounded-xl mb-4"
      >
        <InputMask
          id="phone"
          v-model="phone"
          mask="9(999) 999-9999"
          placeholder="9(999) 999-9999"
          fluid
          class="w-full bg-transparent !shadow-none placeholder:text-gray200 !border-none text-body font-body lg:text-desktop-body lg:font-body"
        />
      </div>
      <LabelVue v-if="isLogin" class="px-2">Имя </LabelVue>
      <div
        v-if="isLogin"
        class="bg-white p-3 border-transparent border-none rounded-xl mb-4"
      >
        <input
          v-model="firstName"
          type="text"
          placeholder="Имя"
          required=""
          class="w-full bg-transparent !placeholder:text-gray200 text-body font-body lg:text-desktop-body lg:font-body"
        />
      </div>
      <LabelVue v-if="isLogin" class="px-2">Фамилия </LabelVue>
      <div
        v-if="isLogin"
        class="bg-white p-3 border-transparent border-none rounded-xl mb-4"
      >
        <input
          v-model="lastName"
          type="text"
          placeholder="Фамилия"
          required=""
          class="w-full bg-transparent placeholder:text-gray200 text-body font-body lg:text-desktop-body lg:font-body"
        />
      </div>
      <div
        class="flex items-center justify-between flex-col md:flex-row md:space-x-4"
      >
        <div
          class="flex items-center space-x-2"
          :class="{ '!text-white': darkMode }"
        >
          <div>{{ isLogin ? "Есть аккаунт?" : "Нет аккаунта?" }}</div>
          <div
            class="font-bold underline cursor-pointer"
            @click="isLogin = !isLogin"
          >
            {{ isLogin ? "Войти" : "Зарегистрироваться" }}
          </div>
        </div>
        <SecondaryButton
          v-if="!darkMode"
          @click="authOrRegistration"
          class="w-full md:w-fit"
          ><div class="mx-auto">
            {{ isLogin ? "Зарегистрироваться" : "Войти" }}
          </div></SecondaryButton
        >
        <JetButton v-else @click="authOrRegistration" class="w-full md:w-fit"
          ><div class="mx-auto">
            {{ isLogin ? "Зарегистрироваться" : "Войти" }}
          </div></JetButton
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

import InputMask from "primevue/inputmask";
import LabelVue from "./Label.vue";

export default {
  components: { AppLayout, SecondaryButton, JetButton, InputMask, LabelVue },
  props: {
    darkMode: {
      default: false,
    },
  },
  data() {
    return {
      isLogin: false,
      email: null,
      password: null,
      data: null,
      isLoading: false,
      phone: null,
      firstName: null,
      lastName: null,
    };
  },
  methods: {
    ...mapActions(["login", "logout"]),
    async authOrRegistration() {
      try {
        if (this.isLogin) {
          const response = await registration(
            this.email,
            this.password,
            this.phone,
            this.firstName,
            this.lastName
          );
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