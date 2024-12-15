/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        berkshire_swash: ['Berkshire Swash', 'serif'],
        montserrat: ['Montserrat', 'serif'],
        lato: ['Lato', 'serif']
      },
      fontSize:{
        titles: '2.5rem',
        title_card: '1.5rem',
        body_card: '.875rem',
        tag_card: '.625rem',
        date_card: '.875rem',
        pills: '1.25rem',
        links: '1rem'
      }
    },
  },
  plugins: [],
}

