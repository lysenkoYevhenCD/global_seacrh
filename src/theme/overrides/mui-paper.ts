import type {Components, Theme} from '@mui/material'

export const MuiPaper: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
  styleOverrides: {
    root: {
      backgroundImage: 'none',
    },
  },
}
