import {type PropsWithChildren} from 'react'

import {createTheme, CssBaseline, ThemeProvider} from '@mui/material'

import {verusThemeOptions} from '../theme'

const MuiProvider = ({children}: PropsWithChildren) => {
  const verusTheme = createTheme(verusThemeOptions)

  return (
    <ThemeProvider theme={verusTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiProvider
