import type {Components, Theme} from '@mui/material'

import {secondaryColors, textMainColor} from '../constants'

export const MuiButtonBase: Components<
  Omit<Theme, 'components'>
>['MuiButtonBase'] = {
  styleOverrides: {
    root: {
      '&.MuiButton-contained': {
        '&:hover': {
          backgroundColor: secondaryColors[100],
        },
        '&.Mui-disabled': {
          opacity: '50%',
          backgroundColor: secondaryColors[300],
          color: textMainColor,
        },
      },
      '&.MuiButton-outlined': {
        borderColor: secondaryColors[300],
        '&:hover': {
          color: secondaryColors[100],
          borderColor: secondaryColors[100],
        },
        '&.Mui-disabled': {
          opacity: '50%',
          borderColor: secondaryColors[300],
          color: secondaryColors[300],
        },
      },
    },
  },
}
