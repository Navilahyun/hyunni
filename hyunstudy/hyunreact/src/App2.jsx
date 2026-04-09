import { useState } from 'react'
import CounterDisplay from './CounterDisplay';
import CounterButton from './CounterButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>카운터</h1>
      <CounterDisplay count={count} />
      <CounterButton label="증가" func={() => setCount(count + 1)} />
      <CounterButton label="감소" func={() => setCount(count - 1)} />
    </div>
  )
}

export default App