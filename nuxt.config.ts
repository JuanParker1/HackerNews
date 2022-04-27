import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false,
        strict: true
    },
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        // cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: false,
    },
    buildModules: [
        '@pinia/nuxt',
      ],
})
