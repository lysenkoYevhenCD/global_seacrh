export const textLightColor = '#FFFFFF'

// `primaryColors` and `secondaryColors` match colors/shades defined in Figma
export const primaryColors = {
  50: '#EAEEFA',
  100: '#CBD6E6',
  200: '#AEBACE',
  300: '#909EB6',
  400: '#556781',
  500: '#45546B',
  600: '#364155',
  700: '#232D3D',
  800: '#19212E',
  900: '#141A24',
}

export const secondaryColors = {
  50: '#E5F0FD',
  100: '#C2D9FA',
  200: '#9EC2F7',
  300: '#7EAAF1',
  600: '#5F78D9',
  700: '#5966C5',
  800: '#5355B2',
  900: '#493690',
}

/** custom colors that admin client use */
export const adminColors = {
  textSecondary: '#adb0bb',
}

export const gradients = {
  VerusAIBorder:
    'linear-gradient(to right, #C884F2 0%, #7EAAF1 50%, #33C4D1 100%) 1',
  searchAssist: 'linear-gradient(90deg, #C884F2 0%, #7EAAF1 50%, #33C4D1 100%)',
}

export const searchAssist = {
  gradient: gradients.searchAssist,
}

export const defaultColor = primaryColors[900]
export const cardColor = primaryColors[700]
export const textMainColor = primaryColors[900]
export const validationErrorMain = '#FF7878'

export const dataLabelTypography = {
  fontWeight: 500,
  fontSize: 12,
  letterSpacing: '1px',
  lineHeight: '18px',
  textTransform: 'uppercase',
} as const
