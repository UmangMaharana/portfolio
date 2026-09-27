/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f6f3ee',
        cream: '#ece7df',
        ink: {
          DEFAULT: '#1a1a1a',
          pure: '#111111',
          muted: '#2a2a2a',
        },
        warm: {
          gray: '#a89f94',
          subtle: '#e4dec',
        },
        caption: '#6b6560',
        rust: {
          DEFAULT: '#c4553a',
          dark: '#a83e25',
          light: '#d96e54',
        },
        navy: {
          DEFAULT: '#2c3e6b',
          dark: '#1d2a4a',
        },
        gold: {
          DEFAULT: '#c9a84c',
          dark: '#a88835',
        },
        sage: {
          DEFAULT: '#6b7f5e',
          dark: '#526347',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Newsreader', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.03em',
        'widest-editorial': '0.2em',
        'ultra-wide': '0.28em',
      },
      borderWidth: {
        'fine': '0.5px',
      },
    },
  },
  plugins: [],
}
