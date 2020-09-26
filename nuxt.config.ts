export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Nyanderful World',
    title: 'Nyanderful World',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '見て！しーちゃんとキャンちゃんが遊んでるよ、可愛いね。',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Nyanderful World',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Nyanderful World',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: '見て！しーちゃんとキャンちゃんが遊んでるよ、可愛いね。',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: '見て！しーちゃんとキャンちゃんが遊んでるよ、可愛いね。',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://naughty-engelbart-0f3944.netlify.app/ogp.jpg',
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: 1200,
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: 630,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Nyanderful World',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://naughty-engelbart-0f3944.netlify.app/ogp.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '@/assets/base/_common.scss',
      '@/assets/base/_mixin.scss',
      '@/assets/base/_setting.scss',
    ],
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      primary: '#1976d2',
      secondary: '#5cbbf6',
      accent: '#8c9eff',
      error: '#b71c1c',
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config: any, ctx: any) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
