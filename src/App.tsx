import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import CustomButton from './components/custom-button'

const App = () => {
  const text = 'Hello World'

  return (
    <Stack>
      <CustomButton>Click</CustomButton>
      <Typography variant="h6">{text}</Typography>
    </Stack>
  )
}

export default App
