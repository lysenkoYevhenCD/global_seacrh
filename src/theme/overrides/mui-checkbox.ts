import type {Components, Theme} from '@mui/material'

import {secondaryColors} from '../constants'

export const MuiCheckbox: Components<Omit<Theme, 'components'>>['MuiCheckbox'] =
  {
    styleOverrides: {
      colorPrimary: {
        '&.MuiCheckbox-root:not(.Mui-disabled)': {
          color: secondaryColors[100],
        },
      },
    },
  }
