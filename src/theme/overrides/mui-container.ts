import type {Components, Theme} from '@mui/material'

export const MuiContainer: Components<
  Omit<Theme, 'components'>
>['MuiContainer'] = {
  styleOverrides: {
    maxWidthXl: {
      '&.MuiContainer-maxWidthXl': {
        maxWidth: 1920,
      },
    },
    root: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
}
