import type {Components, Theme} from '@mui/material'

import {primaryColors} from '../constants'

export const MuiMenuItem: Components<Omit<Theme, 'components'>>['MuiMenuItem'] =
  {
    styleOverrides: {
      root: {
        '&:hover': {
          background: primaryColors[500],
        },
      },
    },
  }
