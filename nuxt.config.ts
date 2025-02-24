// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    autoImport: true
  },
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss", "@formkit/nuxt"],
  css: ["@/assets/main.css"],
  tailwindcss: {
    config: {
      content: ["./node_modules/laravel-vue-pagination/**/*.vue"],
    },
  },
  devServer: {
    host: 'https://127.0.0.1'
  },
  routeRules: {
    "/profiles/*": { swr: true },
    "/*": { ssr: false },
    "/staff/*": { ssr: false },
    "/components/*": { ssr: false },
  },
});
