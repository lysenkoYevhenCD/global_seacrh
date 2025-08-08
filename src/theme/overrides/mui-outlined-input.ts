import type {Components, Theme} from '@mui/material'

import {cardColor} from '../constants'

export const MuiOutlinedInput: Components<
  Omit<Theme, 'components'>
>['MuiOutlinedInput'] = {
  styleOverrides: {
    input: {
      '&:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0 1000px ${cardColor} inset`,
        WebkitTextFillColor: '#fff',
      },
    },
  },
}
