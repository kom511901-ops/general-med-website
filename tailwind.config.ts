import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#0B5FFF',
          600: '#0947d0',
          700: '#062f9a',
          900: '#031459',
        },
        accent: {
          500: '#00C2C7',
          600: '#009ea3',
        },
      },
    },
  },
};

export default config;
