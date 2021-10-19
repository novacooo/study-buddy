export const theme = {
  colors: {
    white: '#FFFFFF',
    lightGrey: '#F7F8FA',
    grey: '#C0C7D6',
    greyHover: '#A9B3C7',
    darkGrey: '#737C8E',
    black: '#111111',
    success: '#8FCB81',
    error: '#CB8581',
    warning: '#E1D888',
    lightPurple: '#C0C7D6',
    border: '#DFE2E8',
    buttonBg: '#ECEFF7',
    buttonBgHover: '#D6DBE7',
  },
  fontSize: {
    xl: '2.4rem',
    l: '1.7rem',
    m: '1.2rem',
    s: '1.1rem',
  },
  fontWeight: {
    regular: '400',
    bold: '700',
  },
  shadows: {
    outline: '0px 0px 0px 3px rgba(192, 199, 214, 0.4)',
  },
};

export type ThemeType = typeof theme;
