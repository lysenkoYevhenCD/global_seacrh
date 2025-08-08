import type {Components, Theme} from '@mui/material'

import {secondaryColors} from '../constants'

export const MuiTab: Components<Omit<Theme, 'components'>>['MuiTab'] = {
  styleOverrides: {
    root: {
      color: secondaryColors[300],
      '&.Mui-selected': {
        color: secondaryColors[50],
      },
      '&.Mui-disabled': {
        opacity: 0.5,
        color: 'inherit',
      },
    },
  },
}
