import { useState } from 'react'
import History from './components/History';
import './App.css'

const  MAX_HISTORY = 10;

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  function historyAction(action, newCount) {
    setCount(newCount);

    const entry = {
      id: '${Date.now()}-${Math.random()}',
      action,
      value: newCount,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    };
    setHistory((h) => [entry, ...h].slice(0, MAX_HISTORY));
  }


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
          <p>You clicked {count} times{count === 1}</p>
        <div className="buttons">
          <button className="Incbtn" onClick={() => historyAction("Increment", count + 1)}>Click me to Increment</button>
          <button className="Decbtn" onClick={() => historyAction("Decrement", count - 1)}>Click me to Decrement</button>
          <button className="Resetbtn" onClick={() => historyAction("Reset", 0)}>Click me to Reset</button>
        </div>

        <History entries={history} onClear={() => setHistory([])}/>
        </main>

      </div>
  );
}

export default App
