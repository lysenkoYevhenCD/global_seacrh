import type {Components, Theme} from '@mui/material'

export const MuiDivider: Components<Omit<Theme, 'components'>>['MuiDivider'] = {
  styleOverrides: {
    root: {
      borderBottomWidth: 'thin',
      borderRightWidth: 0,
      borderStyle: 'groove',
    },
  },
}
