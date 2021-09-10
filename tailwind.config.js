module.exports = {
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
          DEFAULT: '#1e429f',
          dark: '#233876',
        },
        secondary: {
          DEFAULT: "#e02424",
        }
      },
      fontFamily: {
        'sans': ['Rubik','Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
