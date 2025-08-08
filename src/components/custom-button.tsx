import Box from '@mui/material/Box'
import Button, {type ButtonProps} from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

interface CustomButtonProps extends ButtonProps {
  loading?: boolean
}

const CustomButton = ({
  loading,
  disabled,
  children,
  ...rest
}: CustomButtonProps) => (
  <Button disabled={loading || disabled} {...rest}>
    {loading ? (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <CircularProgress size={20} color="inherit" />
      </Box>
    ) : (
      children
    )}
  </Button>
)

export default CustomButton
