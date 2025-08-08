import type {Components, Theme} from '@mui/material'

export const MuiPopper: Components<Omit<Theme, 'components'>>['MuiPopper'] = {
  styleOverrides: {
    root: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
}
