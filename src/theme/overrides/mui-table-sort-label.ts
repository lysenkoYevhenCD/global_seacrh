import type {Components, Theme} from '@mui/material'

import {primaryColors} from '../constants'

export const MuiTableSortLabel: Components<
  Omit<Theme, 'components'>
>['MuiTableSortLabel'] = {
  styleOverrides: {
    icon: {
      color: `${primaryColors[50]} !important`,
    },
  },
}
