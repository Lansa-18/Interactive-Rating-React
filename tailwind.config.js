/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        phone: { max: '35.999em' }, 
        'land-phone': { max: '47.999em' }, // 768px
        'tab-port': { max: '61.999em' }, // 992px
        'tab-land': { max: '74.999em' }, // 1200px
        laptop: { max: '80em' }, // 1280px
        'big-desktop': { max: '87.499em' }, // 1400px
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
