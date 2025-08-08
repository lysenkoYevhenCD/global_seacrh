import type {ThemeOptions} from '@mui/material'

import {dataLabelTypography} from '../constants'

export const muiTypography: ThemeOptions['typography'] = {
  h1: {
    fontWeight: 300,
    fontSize: 96,
    letterSpacing: '-1.5px',
    lineHeight: '112px',
  },
  h2: {
    fontWeight: 300,
    fontSize: 60,
    letterSpacing: '-0.5px',
    lineHeight: '72px',
  },
  h3: {
    fontWeight: 400,
    fontSize: 48,
    letterSpacing: '0px',
    lineHeight: '56px',
  },
  h4: {
    fontWeight: 400,
    fontSize: 34,
    letterSpacing: '0.25px',
    lineHeight: '42px',
  },
  h5: {
    fontWeight: 500,
    fontSize: 24,
    letterSpacing: '0px',
    lineHeight: '32px',
  },
  h6: {
    fontWeight: 500,
    fontSize: 20,
    letterSpacing: '0.15px',
    lineHeight: '32px',
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: '-0.05px',
    lineHeight: '24px',
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: '0.1px',
    lineHeight: '20px',
  },
  body1: {
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: '0.15px',
    lineHeight: '24px',
  },
  body2: {
    fontWeight: 400,
    fontSize: 14,
    letterSpacing: '0.15px',
    lineHeight: '20px',
  },
  caption: {
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: '0.4px',
    lineHeight: '20px',
  },
  overline: dataLabelTypography,
}
