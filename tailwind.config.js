/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: "#110427",
          800: "#1a0a3e",
        },
        blueBaby: {
          300: "#5A7BB8",
        },
        blueSerenate: {
          200: "#E2EEEC",
        },
        grey: {
          100: "#F8F9FA",
          200: "#E2EEEC",
          300: "#E9ECEF",
          600: "#868E96",
          900: "#212529",
        },
        // Cores Cyberpunk Neon
        neon: {
          pink: "#FF2E97",
          cyan: "#00FFFF",
          green: "#39FF14",
          purple: "#BF00FF",
          yellow: "#FFFF00",
          orange: "#FF6B35",
        },
        cyber: {
          dark: "#0D0221",
          grid: "#1A1A2E",
        },
      },
      fontFamily: {
        mono: ["Source Code Pro", "monospace"],
        display: ["Oswald", "sans-serif"],
      },
      boxShadow: {
        'neon-pink': '0 0 5px #FF2E97, 0 0 20px #FF2E97, 0 0 40px #FF2E97',
        'neon-cyan': '0 0 5px #00FFFF, 0 0 20px #00FFFF, 0 0 40px #00FFFF',
        'neon-green': '0 0 5px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14',
        'neon-purple': '0 0 5px #BF00FF, 0 0 20px #BF00FF, 0 0 40px #BF00FF',
        'neon-blue': '0 0 5px #5A7BB8, 0 0 20px #5A7BB8, 0 0 40px #5A7BB8',
        'neon-pink-sm': '0 0 3px #FF2E97, 0 0 10px #FF2E97',
        'neon-cyan-sm': '0 0 3px #00FFFF, 0 0 10px #00FFFF',
        'neon-green-sm': '0 0 3px #39FF14, 0 0 10px #39FF14',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'glitch-1': 'glitch-1 2s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 3s infinite linear alternate-reverse',
        'scanline': 'scanline 8s linear infinite',
        'scan': 'scan 2s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
        'blink-cursor': 'blink-cursor 0.75s step-end infinite',
        'matrix-fall': 'matrixFall 20s linear infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'slideDown': 'slideDown 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'expand': 'expand 0.4s ease-out',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'glitch-1': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(-3px, -3px)' },
          '60%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' },
        },
        'glitch-2': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(3px, -3px)' },
          '40%': { transform: 'translate(3px, 3px)' },
          '60%': { transform: 'translate(-3px, -3px)' },
          '80%': { transform: 'translate(-3px, 3px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        'blink-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        matrixFall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulseNeon: {
          '0%, 100%': {
            boxShadow: '0 0 5px currentColor, 0 0 20px currentColor',
            opacity: '1',
          },
          '50%': {
            boxShadow: '0 0 10px currentColor, 0 0 40px currentColor',
            opacity: '0.8',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          'from': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor',
          },
          'to': {
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 50%' },
          '100%': { backgroundPosition: '-200% 50%' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(3000%)' },
        },
        expand: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
    screens: {
      'sm': '320px',
      'md': '960px',
      'lg': '1200px',
    },
  },
  plugins: [],
};
