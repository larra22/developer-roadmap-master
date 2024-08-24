/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'],
  theme: {
    extend: {
      colors: {
        'lks-color': '#f85900',
        'crudo':'#dbc2a3',
        'rosita':'#db73a',
        'oro-caliente':'#dbb15a',
        'oro-frio':'#dbc15a',
        'naranja-apagado':'#dba05a',
        'azul-complementario':'#5adbdb',
        'blanco': '#ffffff'
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
