import colors from './config/tailwind/colors.json';
import borderRadius from './config/tailwind/borderRadius.json';
import spacing from './config/tailwind/spacing.json';
import zIndex from './config/tailwind/zIndex.json';
import fontSize from './config/tailwind/fontSize.json';
import maxWidth from './config/tailwind/maxWidth.json';
import minWidth from './config/tailwind/minWidth.json';
import minHeight from './config/tailwind/minHeight.json';
import boxShadow from './config/tailwind/boxShadow.json';
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],theme: {
    extend: {
      colors,
      spacing,
      zIndex,
      fontSize,
      maxWidth,
      minWidth,
      minHeight,
      boxShadow,
      screens: {
        '2xl': '1536px',
      },
      lineHeight: {
        72: '7.2rem',
        64: '6.4rem',
        56: '5.6rem',
        40: '4rem',
        32: '3.2rem',
        20: '2.0rem',
        24: '2.4rem',
        28: '2.8rem',
        16: '1.6rem',
      },
      letterSpacing: {
        'rm-ng-1': '-.01rem',
        'rm-ng-2': '-.02rem',
        'rm-ng-3': '-.03rem',
        'rm-1': '0.01rem',
        'rm-2': '0.02rem',
        'rm-3': '0.03rem',
        'rm-4': '0.04rem',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      height: {
        'ad-64': '6.4rem',
        'ad-74': '7.4rem',
      },
    },
    fontFamily: {
      sans: ['Silka', 'system-ui', 'sans-serif'],
    },
    borderRadius,
  },
  plugins: [],
}

