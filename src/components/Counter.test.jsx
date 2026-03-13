import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
  it('renders initial count of 0', () => {
    render(<Counter />)
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0')
  })

  it('uses initialCount prop', () => {
    render(<Counter initialCount={5} />)
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 5')
  })

  it('increments count', async () => {
    render(<Counter />)
    await userEvent.click(screen.getByText('Increment'))
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 1')
  })

  it('decrements count', async () => {
    render(<Counter initialCount={3} />)
    await userEvent.click(screen.getByText('Decrement'))
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 2')
  })

  it('resets count to 0', async () => {
    render(<Counter initialCount={10} />)
    await userEvent.click(screen.getByText('Reset'))
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0')
  })
})
