import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='content'>
      <h1>Counters {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default App
