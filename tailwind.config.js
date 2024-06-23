/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'big-desktop': { max: '87.499em' }, // 1400px
        laptop: { max: '80em' }, // 1280px
        'tab-land': { max: '74.999em' }, // 1200px
        'custom-1100': { max: '68.749em' }, // 1100px
        'tab-port': { max: '61.999em' }, // 992px
        'custom-915': { max: '57.187em' }, // 915px
        'land-phone': { max: '47.999em' }, // 768px
        'custom-680': { max: '42.499em' }, // 680px
        phone: { max: '35.999em' }, // 576px
      },
      colors: {
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
        orange: 'hsl(25, 97%, 53%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'small-dark-blue': 'hsl(213, 15%, 14%)',
      },
      backgroundColor: {
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
        orange: 'hsl(25, 97%, 53%)',
      },
      backgroundImage: {
        'custom-radial':
          'radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)',
      },
      textColor: {
        'light-grey': 'hsl(217, 12%, 63%)',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
      fontSize: {
        'custom-1.5rem': '1.5rem', // Custom font size
      },
    },
  },
  plugins: [],
};
