import type {Components, Theme} from '@mui/material'

import {defaultColor, primaryColors} from '../constants'

export const MuiCssBaseline: Components<
  Omit<Theme, 'components'>
>['MuiCssBaseline'] = {
  styleOverrides: {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      // this is webkit-only hack for scrollbar. other browsers won't work
      '&::-webkit-scrollbar': {
        width: 8,
        height: 8,
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: defaultColor,
        opacity: '0.9 !important',
        width: 8,
        '&:hover': {
          backgroundColor: defaultColor,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: primaryColors[500],
            width: 8,
          },
        },
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: primaryColors[500],
        borderRadius: 0,
        right: 0,
        width: 8,
      },
    },
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      height: '100%',
      width: '100%',
    },
    body: {
      height: '100%',
      width: '100%',
      fontFamily: "'Roboto', Arial, Helvetica",
    },
    '#root': {
      height: '100%',
      width: '100%',
    },
  },
}
