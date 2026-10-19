import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
        <main>
          <h1>DOM Lab, rebuilt in React</h1>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount((count) => count + 1)}>Click me to Increment</button>
          <button onClick={() => setCount((count) => count - 1)}>Click me to Decrement</button>
          <button onClick={() => setCount(0)}>Click me to Reset</button>
        </main>
  )
}

export default App
