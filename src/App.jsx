import './App.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import TaskState from './components/TaskState'
import CreateTask from './components/CreateTask'

function App() {
  const [count, setCount] = useState(0)

  return (


    <div>
      <div className='container'>

        <Header />

        <TaskState />

        <CreateTask />

      </div>
    </div>
  )
}

export default App
