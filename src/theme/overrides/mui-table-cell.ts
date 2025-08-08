import type {Components, Theme} from '@mui/material'

import {primaryColors} from '../constants'

export const MuiTableCell: Components<
  Omit<Theme, 'components'>
>['MuiTableCell'] = {
  styleOverrides: {
    root: {
      verticalAlign: 'top',
      '&:first-of-type': {
        paddingLeft: 24,
      },
      '&:last-child:not(.MuiTableCell-sizeSmall)': {
        paddingRight: 24,
      },
      borderBottom: 'none',
    },
    head: {
      textTransform: 'uppercase',
      color: primaryColors[300],
      letterSpacing: 1,
      lineHeight: '18px',
      fontSize: 12,
      verticalAlign: 'unset',
    },
    paddingCheckbox: {
      '&:first-of-type': {
        paddingLeft: 14,
        padding: '7px 0 0 14px',
      },
    },
    stickyHeader: {
      '&.MuiTableCell-root.MuiTableCell-head.MuiTableCell-stickyHeader': {
        backgroundColor: primaryColors[700],
      },
    },
  },
}
