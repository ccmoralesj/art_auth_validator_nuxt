export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Art Auth Validator",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3001,
  },

  devtools: {
    enabled: true,
  },

  runtimeConfig: {
    BACKEND_API_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJhcnQtYXV0aC12YWxpZGF0b3ItYXBpIiwiaXNzdWVkQXQiOiIyMDIzLTExLTI1VDAzOjIxOjQ2LjgzNVoiLCJleHBpcmF0aW9uIjoiMjAyMy0xMi0yNVQwMzoyMTo0Ni44MzVaIiwiZW50aXR5IjoiYXBpIiwiZW50aXR5TmFtZSI6InN1cGVyLWFkbWluLWp3dCIsImlhdCI6MTcwMDg4MjUwNn0.tjk7TxuOJ1LMgu2_c3R1ODcX-_iuzs0Mfdpi5Q5CEhI",
    public: {
      MORACRIS_WEB_PAGE_URI: "https://www.google.com",
      BACKEND_API: process.env.BACKEND_URI,
    },
  },
});
