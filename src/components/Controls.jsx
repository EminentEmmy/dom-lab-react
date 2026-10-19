function Controls({ onclickIncrement, onclickDecrement, onclickReset }) {
  return (
    <div className="controls">
      <button className="Incbtn" onClick={onclickIncrement}>Click me to Increment</button>
      <button className="Decbtn" onClick={onclickDecrement}>Click me to Decrement</button>
      <button className="Resetbtn" onClick={onclickReset}>Click me to Reset</button>
    </div>
  )
}