import { createMemoryHistory, createRouter } from "vue-router";

import About from "@/Pages/About.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import HomePage from "@/Pages/HomePage.vue";
import Visit from "@/Pages/Visit.vue";
import Exhibition from "@/Pages/Exhibition.vue";
import CollectionPage from "@/Pages/CollectionPage.vue";
import Collection from "@/Pages/Collection.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: About },
  { path: "/test", name: "Test", component: HelloWorld },
  { path: "/Visit", name: "Visit", component: Visit },
  { path: "/Exhibition", name: "Exhibition", component: Exhibition },
  { path: "/Collection", name: "Collection", component: Collection },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
