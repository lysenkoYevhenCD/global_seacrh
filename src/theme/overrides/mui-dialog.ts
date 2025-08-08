import type {Components, Theme} from '@mui/material'

export const MuiDialog: Components<Omit<Theme, 'components'>>['MuiDialog'] = {
  styleOverrides: {
    paper: {
      backgroundImage: 'none',
    },
  },
}
