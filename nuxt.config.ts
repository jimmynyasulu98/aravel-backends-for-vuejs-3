// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss", "@formkit/nuxt"],
  css: ["@/assets/main.css"],
  tailwindcss: {
    config: {
      content: ["./node_modules/laravel-vue-pagination/**/*.vue"],
    },
  },
  devServer: {
    host: '127.0.0.1'
  },
  routeRules: {
    "/profiles/*": { swr: true },
    "/*": { ssr: false },
  },
});
