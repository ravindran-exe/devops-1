import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoList from './TodoList'

describe('TodoList', () => {
  it('shows empty state initially', () => {
    render(<TodoList />)
    expect(screen.getByText('No todos yet.')).toBeInTheDocument()
  })

  it('adds a todo', async () => {
    render(<TodoList />)
    await userEvent.type(screen.getByLabelText('New todo'), 'Buy milk')
    await userEvent.click(screen.getByText('Add'))
    expect(screen.getByText('Buy milk')).toBeInTheDocument()
    expect(screen.queryByText('No todos yet.')).not.toBeInTheDocument()
  })

  it('adds a todo by pressing Enter', async () => {
    render(<TodoList />)
    await userEvent.type(screen.getByLabelText('New todo'), 'Walk the dog{Enter}')
    expect(screen.getByText('Walk the dog')).toBeInTheDocument()
  })

  it('clears input after adding', async () => {
    render(<TodoList />)
    const input = screen.getByLabelText('New todo')
    await userEvent.type(input, 'Some task')
    await userEvent.click(screen.getByText('Add'))
    expect(input).toHaveValue('')
  })

  it('ignores empty input', async () => {
    render(<TodoList />)
    await userEvent.click(screen.getByText('Add'))
    expect(screen.getByText('No todos yet.')).toBeInTheDocument()
  })

  it('removes a todo', async () => {
    render(<TodoList />)
    await userEvent.type(screen.getByLabelText('New todo'), 'Delete me{Enter}')
    await userEvent.click(screen.getByText('Remove'))
    expect(screen.queryByText('Delete me')).not.toBeInTheDocument()
  })

  it('toggles a todo done', async () => {
    render(<TodoList />)
    await userEvent.type(screen.getByLabelText('New todo'), 'Learn React{Enter}')
    const checkbox = screen.getByLabelText('Toggle: Learn React')
    expect(checkbox).not.toBeChecked()
    await userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
})
