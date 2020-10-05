module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: [
      './**/*.html',],
  },
  theme: {
    extend: {
      maxWidth: {
      '6': '6rem',
      },
      colors: {
        primary: {
          default: '#1e429f',
          dark: '#233876',
        },
        secondary: {
          default: "#e02424",
        }
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
