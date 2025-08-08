import type {Components, Theme} from '@mui/material'

import {primaryColors} from '../constants'

export const MuiTableRow: Components<Omit<Theme, 'components'>>['MuiTableRow'] =
  {
    styleOverrides: {
      root: {
        '&:nth-of-type(2n+1)': {
          backgroundColor: primaryColors[800],
        },
        '&.MuiTableRow-root:hover': {
          backgroundColor: primaryColors[600],
          cursor: 'pointer',
        },
      },
      head: {
        '&:nth-of-type(2n+1)': {
          backgroundColor: 'unset',
        },
        '&.MuiTableRow-root:hover': {
          backgroundColor: 'unset',
          cursor: 'unset',
        },
      },
    },
  }
