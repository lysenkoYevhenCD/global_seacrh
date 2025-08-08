import type {Components, Theme} from '@mui/material'

import {secondaryColors} from '../constants'

export const MuiButton: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  styleOverrides: {
    text: {
      '&.MuiButton-colorPrimary.Mui-disabled': {
        color: secondaryColors[300],
        opacity: 0.5,
      },
    },
  },
}
