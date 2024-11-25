<template>
  <RouterView />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { check, login, registration } from "@/http/userApi";
export default {
  name: "App",
  methods: {
    ...mapActions(["login", "logout"]),
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  async created() {
    if (!this.isAuthenticated) {
      try {
        const data = await check();
        this.login(data);
      } catch (e) {
        console.log(e);
      }
    }
  },
};
</script>

<style>
body {
  font-family: "Rubik", sans-serif;
  color: #333;
}
p {
  margin: 0;
  padding: 0.5rem 0;
}
</style>


