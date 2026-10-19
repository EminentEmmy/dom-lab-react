function getCountDisplay(count) {
if (count === 0) return <p>Click the button to start counting!</p>;
if (count < 10) return <p>You clicked {count} times</p>;
if (count < 25) return <p>Keep going! You've clicked {count} times</p>;
  return (
    <p>You clicked {count} times</p>
  )
}

function CountDisplay({ count }) {
  return (
    <section>
        <p className="display">{count}</p>
        <p className="message">{getCountDisplay(count)}</p>
    </section>
  )
}