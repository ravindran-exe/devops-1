import { useState } from 'react'

export default function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <h2>Counter</h2>
      <p data-testid="count">Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      {' '}
      <button onClick={() => setCount(c => c - 1)}>Decrement</button>
      {' '}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
