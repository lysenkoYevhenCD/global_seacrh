import type {Components, Theme} from '@mui/material'

export const MuiListItemIcon: Components<
  Omit<Theme, 'components'>
>['MuiListItemIcon'] = {
  styleOverrides: {
    root: {
      minWidth: 32,
    },
  },
}
