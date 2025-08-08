import type {Components, Theme} from '@mui/material'

import {primaryColors, secondaryColors, validationErrorMain} from '../constants'

export const MuiAutocomplete: Components<
  Omit<Theme, 'components'>
>['MuiAutocomplete'] = {
  styleOverrides: {
    popupIndicator: {
      color: secondaryColors[100],
    },
    clearIndicator: {
      padding: '2px',
      marginRight: '8px',
      marginTop: '2px',
      backgroundColor: secondaryColors[300],
      color: primaryColors[900],
      '&:hover': {
        backgroundColor: secondaryColors[200],
        color: primaryColors[900],
      },
    },
    inputRoot: {
      backgroundColor: primaryColors[500],
      '&.MuiInputBase-fullWidth': {
        borderBottom: `1px solid ${primaryColors[400]}`,
        '&.Mui-focused:not(.Mui-error)': {
          borderBottom: `1px solid ${primaryColors[200]}`,
        },
      },
    },
    root: {
      '& .Mui-error': {
        '& .MuiAutocomplete-clearIndicator': {
          backgroundColor: validationErrorMain,
          '&:hover': {
            backgroundColor: '#FF8888',
          },
        },
      },
    },
    tag: {
      maxWidth: 'calc(100% - 34px)',
      margin: '0px 4px 0px 0px',
    },
  },
}
