module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['*.html'],
  },
  theme: {
    extend: {
      maxWidth: {
      '6': '6rem',
    },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
