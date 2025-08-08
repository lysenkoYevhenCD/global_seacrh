import type {Components, Theme} from '@mui/material'

import {cardColor} from '../constants'

export const MuiInputBase: Components<
  Omit<Theme, 'components'>
>['MuiInputBase'] = {
  styleOverrides: {
    root: {
      '&.Mui-disabled': {
        opacity: 0.5,
      },
    },
    input: {
      '&:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0 1000px ${cardColor} inset`,
        WebkitTextFillColor: '#fff',
      },
    },
  },
}
