import './App.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import TaskState from './components/TaskState'

function App() {
  const [count, setCount] = useState(0)

  return (


    <div>
      <div className='container'>

        <Header />

        <TaskState />

      </div>
    </div>
  )
}

export default App
