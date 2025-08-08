import type {ThemeOptions} from '@mui/material'

import {
  cardColor,
  defaultColor,
  primaryColors,
  secondaryColors,
  textLightColor,
  validationErrorMain,
} from '../constants'

export const muiPalette: ThemeOptions['palette'] = {
  mode: 'dark',
  common: {
    white: '#ffffff',
  },
  action: {
    active: 'rgba(255, 255, 255, 0.54)',
    hover: 'rgba(255, 255, 255, 0.04)',
    selected: 'rgba(255, 255, 255, 0.08)',
    disabled: 'rgba(255, 255, 255, 0.26)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
  },
  background: {
    default: defaultColor,
    gray: '#3F4754',
    hover: primaryColors[600],
    hoverLight: primaryColors[400],
    main: '#282C34',
    card: cardColor,
    paper: primaryColors[600],
    purple: secondaryColors[900],
    secondary: primaryColors[800],
    selected: primaryColors[500],
  },
  divider: primaryColors[400],
  success: {
    main: '#CEEF8D',
  },
  error: {
    light: '#FF8888',
    main: validationErrorMain,
    dark: '#FF6B6B',
  },
  warning: {
    main: '#FFCC9E',
  },
  primary: {
    light: secondaryColors[100],
    main: secondaryColors[300],
    dark: '#6C97EE',
  },
  secondary: {
    light: '#6C97EE',
    main: secondaryColors[600],
    dark: secondaryColors[800],
  },
  tertiary: {
    light: '#00B8C8',
    main: '#009DAE',
    dark: '#00ACC0',
  },
  text: {
    light: textLightColor,
    main: primaryColors[900],
    primary: primaryColors[50],
    secondary: primaryColors[300],
    tertiary: secondaryColors[50],
  },
  textFade: {
    main: primaryColors[200],
  },
  lexicon: {
    default: {
      light: '#FFADAD',
      main: '#FF8888',
    },
    term: {
      light: '#ACE7EC',
      main: '#73D5DE',
    },
    synonym: {
      light: '#CBD1FF',
      main: '#9EA9FF',
    },
    multi: {
      light: '#C884F2',
      main: '#C884F2',
    },
  },
  gradient: {
    teal: {
      main: '#33C4D1',
    },
    blue: {
      main: '#9EC2F7',
    },
    yellow: {
      main: '#FFFE91',
    },
  },
}
