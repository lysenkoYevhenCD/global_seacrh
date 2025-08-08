import type {Components, Theme} from '@mui/material'

export const MuiInputLabel: Components<
  Omit<Theme, 'components'>
>['MuiInputLabel'] = {
  styleOverrides: {
    root: {
      '&.Mui-disabled': {
        opacity: 0.5,
      },
    },
  },
}
