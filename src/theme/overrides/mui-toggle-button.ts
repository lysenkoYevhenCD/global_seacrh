import type {Components, Theme} from '@mui/material'

import {dataLabelTypography, primaryColors, secondaryColors} from '../constants'

export const MuiToggleButton: Components<
  Omit<Theme, 'components'>
>['MuiToggleButton'] = {
  styleOverrides: {
    root: {
      '&.MuiToggleButton-primary': {
        borderColor: primaryColors[600],
        color: primaryColors[300],
        '&.Mui-selected': {
          backgroundColor: primaryColors[600],
          color: primaryColors[50],
          '&:hover': {
            backgroundColor: primaryColors[400],
            borderColor: primaryColors[400],
            color: primaryColors[50],
          },
        },
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: primaryColors[400],
          color: primaryColors[50],
        },
      },
      '&.MuiToggleButton-secondary': {
        borderColor: secondaryColors[300],
        color: secondaryColors[300],
        '&.Mui-selected': {
          backgroundColor: secondaryColors[300],
          color: primaryColors[900],
          '&:hover': {
            backgroundColor: secondaryColors[100],
            borderColor: secondaryColors[100],
            color: primaryColors[900],
          },
        },
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: secondaryColors[100],
          color: secondaryColors[100],
        },
      },
      '&.Mui-disabled': {
        opacity: 0.5,
      },
    },
    sizeSmall: {
      padding: '2px 8px',
      '&:hover': {
        zIndex: 9,
      },
      ...dataLabelTypography,
    },
    sizeMedium: {
      padding: '7px',
      '&:hover': {
        zIndex: 9,
      },
    },
  },
}
