import { useState } from 'react'
import Right from './home/Rightpart/Right'
import Left from './home/Leftpart/Left'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex h-screen">
    <Left /> 
    <Right />
    </div>
        
    </>
  )
}

export default App
