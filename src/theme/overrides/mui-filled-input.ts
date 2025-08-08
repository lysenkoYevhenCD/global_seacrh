import type {Components, Theme} from '@mui/material'

export const MuiFilledInput: Components<
  Omit<Theme, 'components'>
>['MuiFilledInput'] = {
  styleOverrides: {
    root: {
      gap: '4px 0',
    },
  },
}
