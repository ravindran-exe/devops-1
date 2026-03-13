import { useState } from 'react'
import Counter from './components/Counter'
import TodoList from './components/TodoList'

export default function App() {
  const [tab, setTab] = useState('counter')

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '40px auto', padding: '0 20px' }}>
      <h1>React Sample App</h1>
      <nav style={{ marginBottom: 24 }}>
        <button onClick={() => setTab('counter')} disabled={tab === 'counter'}>Counter</button>
        {' '}
        <button onClick={() => setTab('todos')} disabled={tab === 'todos'}>Todo List</button>
      </nav>
      {tab === 'counter' ? <Counter /> : <TodoList />}
    </div>
  )
}
