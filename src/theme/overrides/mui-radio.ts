import type {Components, Theme} from '@mui/material'

import {secondaryColors} from '../constants'

export const MuiRadio: Components<Omit<Theme, 'components'>>['MuiRadio'] = {
  styleOverrides: {
    colorPrimary: {
      '&.MuiRadio-root': {
        color: secondaryColors[100],
      },
    },
  },
}
