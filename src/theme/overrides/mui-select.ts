import type {Components, Theme} from '@mui/material'

import {secondaryColors} from '../constants'

export const MuiSelect: Components<Omit<Theme, 'components'>>['MuiSelect'] = {
  styleOverrides: {
    iconFilled: {
      color: secondaryColors[100],
    },
  },
}
