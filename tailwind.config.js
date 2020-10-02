module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
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
