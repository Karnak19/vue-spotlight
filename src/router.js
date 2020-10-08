import { ref } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home";

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "hey", path: "/hey", component: Home },
  { name: "ho", path: "/ho", component: Home },
  { name: "hi", path: "/hi", component: Home },
  { name: "ha", path: "/ha", component: Home },
  { name: "hu", path: "/hu", component: Home },
];

export const cleanRoutes = ref(
  routes.map((r, i) => {
    const rr = { id: i, ...r };
    delete rr.component;
    return rr;
  })
);

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
