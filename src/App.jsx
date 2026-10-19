import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="page">
        <header>
            <div className="header">
              <span className="logo">
                D
              </span>
              <span style={{ color: '#1e293b', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.12em' }}>
                DOM <span style={{ color: '#7c3aed' }}>LAB</span>
              </span>
            </div>
          
        </header>

        <main>
          <h1>DOM Lab, rebuilt in React</h1>
          <p>You clicked {count} times</p>
        <div className="buttons">
          <button className="Incbtn" onClick={() => setCount((count) => count + 1)}>Click me to Increment</button>
          <button className="Decbtn" onClick={() => setCount((count) => count - 1)}>Click me to Decrement</button>
          <button className="Resetbtn" onClick={() => setCount(0)}>Click me to Reset</button>
        </div>
        </main>
      </div>
  )
}

export default App
