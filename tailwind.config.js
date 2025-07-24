/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fleet-blue': '#0a192f',
        'steel-gray': '#374151',
        'khaki': '#f5e6c3',
        'anchor-white': '#f9fafb',
        'silver-insignia': '#d1d5db',
      },
      fontFamily: {
        'heading': ['Bebas Neue', 'Oswald', 'Anton', 'sans-serif'],
        'body': ['Inter', 'DM Sans', 'PT Sans', 'sans-serif'],
      },
      backgroundImage: {
        'chevron-pattern': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg%22%3E%3Cg fill=\"%23374151\" fill-opacity=\"0.05\" fill-rule=\"evenodd%22%3E%3Cpath d=\"M20 20l10-10v20l-10-10zm-10 0L0 10v20l10-10z\"/%3E%3C/g%3E%3C/svg%3E')",
        'anchor-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg%22%3E%3Cg fill=\"none\" fill-rule=\"evenodd%22%3E%3Cg fill=\"%23d1d5db\" fill-opacity=\"0.03%22%3E%3Cpath d=\"M30 30c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10zm10 0c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'chevron-glow': 'chevronGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        chevronGlow: {
          '0%': { boxShadow: '0 0 5px rgba(245, 230, 195, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(245, 230, 195, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}