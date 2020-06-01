/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {
      blue: '#7289DA',
      grey: '#2C2F33',
      lightgrey: '#99AAB5',
      darkgrey: '#23272A',
      white: '#FFFFFF'
    },
    boxShadow: {
      nav: '0 20px 10px -10px rgba(0,0,0,0.2)'
    },
    spacing: {
      0: '0',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      8: '28px',
      10: '40px ',
      12: '48px ',
      16: '64px ',
      20: '80px ',
      24: '96px ',
      32: '128px',
      40: '160px',
      48: '192px',
      56: '224px',
      64: '256px',
      75: '300px',
      85: '340px'
    },
    fontFamily: {
      logo: ['Shadows Into Light', 'cursive'],
      body: ['Open Sans', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      '4k': '2560px'
    }
  },
  variants: {},
  plugins: []
}
