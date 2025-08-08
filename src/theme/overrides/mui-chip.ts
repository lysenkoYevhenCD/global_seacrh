import type {Components, Theme} from '@mui/material'

import {primaryColors, validationErrorMain} from '../constants'

export const MuiChip: Components<Omit<Theme, 'components'>>['MuiChip'] = {
  styleOverrides: {
    sizeSmall: {
      fontSize: '13px',
      '& > .MuiChip-icon': {
        marginLeft: '6px',
      },
    },
    sizeMedium: {
      fontSize: '16px',
      '& > .MuiChip-icon': {
        marginLeft: '8px',
      },
    },
    icon: {
      fontSize: '16px',
    },
    colorError: {
      backgroundColor: '#1A0000',
      borderColor: validationErrorMain,
      color: validationErrorMain,
      '& .MuiChip-deleteIcon': {
        color: validationErrorMain,
        '&:hover': {
          color: validationErrorMain,
        },
      },
    },
    root: {
      backgroundColor: primaryColors[700],
      borderRadius: '16px',
    },
    deleteIcon: {
      color: primaryColors[50],
      '&:hover': {
        color: primaryColors[50],
      },
    },
  },
}
