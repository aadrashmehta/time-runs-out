import { useState, useRef } from 'react'

function App() {
  const inputValue = useRef();
  const [count, setCount] = useState(0);

  return (
    <>      
      <div className="card">
        <button onClick={() => setCount((count) => count > 1 ? count - 1 : 1)} disabled={count < 1 ? true: false}>
          -
        </button>
        <input 
          type="number" 
          ref={inputValue} 
          value={count} 
          min="1"
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <p>
          {count > 1 &&
            `Edit <code>src/App.jsx</code> and save to test HMR`}
          {count <= 1 &&   
            `Count can't be less than 1`
          }
        </p>
        <button onClick={() => inputValue.current.focus()}>
          Focus
        </button>
      </div> 
    </>
  )
}

export default App
