<template>
  <AppLayout>
    <div class="p-4 bg-red-500">Hi vue</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </AppLayout>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppLayout from "./Layouts/AppLayout.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AppLayout,
  },
};
</script>


