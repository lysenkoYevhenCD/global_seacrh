import type {Components, Theme} from '@mui/material'

import {defaultColor, secondaryColors} from '../constants'

export const MuiFab: Components<Omit<Theme, 'components'>>['MuiFab'] = {
  styleOverrides: {
    root: {
      '&:hover': {
        backgroundColor: secondaryColors[100],
      },
      '&.Mui-disabled': {
        opacity: 0.5,
        color: defaultColor,
        backgroundColor: secondaryColors[300],
      },
    },
  },
}
