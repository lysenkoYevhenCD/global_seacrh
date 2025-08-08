import type {Components, Theme} from '@mui/material'

import {primaryColors, secondaryColors} from '../constants'

export const MuiSlider: Components<Omit<Theme, 'components'>>['MuiSlider'] = {
  styleOverrides: {
    // This override uses the MUI v4 style of slider value labels
    valueLabel: {
      lineHeight: 1.2,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      fontWeight: 400,
      color: primaryColors[900],
      backgroundColor: secondaryColors[300],
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&::before': {display: 'none'},
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  },
}
