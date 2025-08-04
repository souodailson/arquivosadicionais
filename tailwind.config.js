// tailwind.config.js
import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // cor fallback de card, você pode sobrescrever por card.color
        'card-bg': 'rgba(255,255,255,0.08)',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [
    typography,
    animate,
    // utilitário customizado de glassmorphism
    ({ addUtilities }) => {
      addUtilities({
        '.bg-glass': {
          'background-color': 'rgba(255,255,255,0.05)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border-radius': '1rem',
        },
        '.card-glass': {
          'background-color': 'rgba(255,255,255,0.07)',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          'border-radius': '0.75rem',
        },
      }, { variants: ['responsive'] });
    },
  ],
};
