import './App.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import TaskState from './components/TaskState'
import CreateTask from './components/CreateTask'
import Categories from './components/Categories'
import MadeTasks from './components/MadeTasks'

function App() {

  const [isTaskOpen, setIsTaskOpen] = useState(false)


  return (


    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container'>

        <Header OpenModal={() => setIsTaskOpen(true)} />

        <TaskState />

        {isTaskOpen &&
          <div className='h-screen fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm' onClick={() => setIsTaskOpen(false)}>
            <CreateTask closeModal={() => setIsTaskOpen(false)}/>
          </div>
        }

        <Categories />

        <MadeTasks />

      </div>
    </motion.div>
  )
}

export default App
