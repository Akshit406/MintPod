/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
      
        primary: {
          dark: '#0f0e17',    // Deep space black
          purple: '#7f5af0',  // Electric purple
          teal: '#2cb67d',    // Neon teal
        },
        secondary: {
          purple: '#a786df',  // Softer purple
        },
        accent: {
          green: '#2cb67d',   // Matching teal
          pink: '#e53170',    // Cyberpunk pink
        },
        // Grayscale with blueish tint
        gray: {
          900: '#0a0a12',     // Darkest (background)
          800: '#12121d',     // Dark (cards)
          700: '#1e1e2d',     // Medium (dividers)
          600: '#2a2a3a',     // Light gray
          500: '#4a4a5a',     // Lighter gray
          400: '#7a7a8c',     // Text secondary
          300: '#a0a0b0',     // Text primary
          200: '#d0d0e0',     // Almost white
        }
      },
      boxShadow: {
        'glow-purple': '0 0 15px rgba(127, 90, 240, 0.5)',
        'glow-teal': '0 0 15px rgba(44, 182, 125, 0.5)',
        'glow-hover': '0 0 20px rgba(127, 90, 240, 0.8)',
      },
      backgroundImage: {
        'radial-purple': 'radial-gradient(circle at center, rgba(127, 90, 240, 0.1) 0%, transparent 70%)',
        'gradient-cyber': 'linear-gradient(90deg, #7f5af0, #2cb67d)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'] 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Custom glow effect plugin
    function ({ addUtilities }) {
      const newUtilities = {
        '.glow-effect': {
          'box-shadow': '0 0 10px rgba(127, 90, 240, 0.5)',
          'transition': 'all 0.3s ease',
        },
        '.glow-effect:hover': {
          'box-shadow': '0 0 20px rgba(127, 90, 240, 0.8)',
        },
        '.text-gradient': {
          'background-image': 'linear-gradient(90deg, #7f5af0, #2cb67d)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}