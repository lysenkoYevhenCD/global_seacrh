import type {Components, Theme} from '@mui/material'

import {primaryColors, secondaryColors} from '../constants'

export const MuiIconButton: Components<
  Omit<Theme, 'components'>
>['MuiIconButton'] = {
  styleOverrides: {
    root: {
      '&:hover': {
        color: primaryColors[100],
      },
      '&.Mui-disabled': {
        color: secondaryColors[300],
        opacity: 0.5,
      },
    },
  },
}
