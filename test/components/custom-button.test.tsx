import {fireEvent, render, screen} from '@testing-library/react'
import {test, describe, vi} from 'vitest'

import CustomButton from '../../src/components/custom-button'

describe('CustomButton', () => {
  test('renders with text', () => {
    render(<CustomButton>Click me</CustomButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  test('renders loader when loading is true', () => {
    render(<CustomButton loading>Click Me</CustomButton>)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<CustomButton onClick={handleClick}>Click me</CustomButton>)

    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('is disabled when disabled prop is true', () => {
    render(<CustomButton disabled>Click me</CustomButton>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
