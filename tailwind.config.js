/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        '900': '900px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
        'orange': 'hsl(25, 97%, 53%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'small-dark-blue': 'hsl(213, 15%, 14%)',
      },
      backgroundColor: {
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
        'orange': 'hsl(25, 97%, 53%)'
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
}