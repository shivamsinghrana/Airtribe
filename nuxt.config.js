// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: "index",
          path: "/",
          component: resolve(__dirname, "pages/index.vue"),
        },
        {
          name: "task-details",
          path: "/task-details",
          component: resolve(__dirname, "pages/task-details.vue"),
        }
      );
    },
  },
});
