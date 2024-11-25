<template>
  <AppLayout pageTitle="Личный кабинет">
    <div class="md:px-28">
      <AuthBlock />
    </div>
    <div></div>
  </AppLayout>
</template>

<script>
import AuthBlock from "@/components/AuthBlock.vue";
import JetButton from "@/components/JetButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import { check, login, registration } from "@/http/userApi";
import AppLayout from "@/Layouts/AppLayout.vue";
import axios from "axios";

export default {
  components: { AppLayout, SecondaryButton, JetButton, AuthBlock },
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
    async authOrRegistration() {
      try {
        if (this.isLogin) {
          this.data = await registration(this.email, this.password);
        } else {
          this.data = await login(this.email, this.password);
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