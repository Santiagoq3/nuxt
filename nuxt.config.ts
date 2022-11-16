// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: '~/config/tailwind.js',
  },
  app: {
    head: {
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOriginIsolated: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap',
        },
      ],
    },
  },
});
