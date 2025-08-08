import {SimplePaletteColorOptions} from '@mui/material/styles'

// See https://mui.com/material-ui/about-the-lab/#typescript
import type {} from '@mui/lab/themeAugmentation'
import type {} from '@mui/x-date-pickers-pro/themeAugmentation'

declare module '@mui/material/styles' {
  interface TypeBackground {
    gray: React.CSSProperties['color']
    hover: React.CSSProperties['color']
    hoverLight: React.CSSProperties['color']
    main: React.CSSProperties['color']
    card: React.CSSProperties['color']
    secondary: React.CSSProperties['color']
    selected: React.CSSProperties['color']
    purple: React.CSSProperties['color']
  }

  interface TypeText {
    light: React.CSSProperties['color']
    main: React.CSSProperties['color']
    tertiary: React.CSSProperties['color']
  }

  interface Palette {
    tertiary: SimplePaletteColorOptions
    textFade: SimplePaletteColorOptions
    lexicon: {
      default: SimplePaletteColorOptions
      term: SimplePaletteColorOptions
      synonym: SimplePaletteColorOptions
      multi: SimplePaletteColorOptions
    }
    gradient: {
      [s: string]: SimplePaletteColorOptions
    }
  }

  interface PaletteOptions {
    tertiary: PaletteColorOptions
    textFade: PaletteColorOptions
    lexicon: {
      default: PaletteColorOptions
      term: PaletteColorOptions
      synonym: PaletteColorOptions
      multi: PaletteColorOptions
    }
    gradient: {
      [s: string]: PaletteColorOptions
    }
  }
}
