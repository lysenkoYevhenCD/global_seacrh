import type {Components, Theme} from '@mui/material'

export const MuiPopover: Components<Omit<Theme, 'components'>>['MuiPopover'] = {
  styleOverrides: {
    paper: {
      backgroundImage: 'unset',
    },
  },
}
