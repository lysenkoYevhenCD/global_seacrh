import type {Components, Theme} from '@mui/material'

export const MuiLinearProgress: Components<
  Omit<Theme, 'components'>
>['MuiLinearProgress'] = {
  styleOverrides: {
    root: {
      borderRadius: 3,
      overflow: 'hidden',
    },
  },
}
