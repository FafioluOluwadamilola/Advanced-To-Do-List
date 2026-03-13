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

  const [editingTask, setEditingTask] = useState(null)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish React Project",
      description: "Complete the to-do application with all features and styling.",
      category: "Work",
      status: "Completed"
    },
    {
      id: 2,
      title: "Grocery Shopping",
      description: "Buy ingredients for the week: milk, eggs, bread, and vegetables.",
      category: "Personal",
      status: "Active"
    },
    {
      id: 3,
      title: "Doctor's Appointment",
      description: "Annual check-up at the clinic.",
      category: "Health",
      status: "Active"
    }
  ])



  const addTask = (newTask) => {
    setTasks(prevTasks => {
      const exist = prevTasks.some(task => task.id === newTask.id)

      if(exist) {
        return prevTasks.map(task => 
          task.id === newTask.id ? newTask : task)
      }
      
      return [newTask, ...prevTasks]
    })
  }


  const [filter, setFilter] = useState("All")

  const visibleTasks = tasks.filter(task => {
    if (filter === "All") return true;
    if (filter === "Active") return task.status === "Active";
    if (filter === "Completed") return task.status === "Completed";

    return task.category.toLowerCase() === filter.toLowerCase();
  })


  const toggleTaskStatus = (id) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === id ?
        {
          ...task,
          status: task.status === "Active" ? "Completed" : "Active"
        } : task
    ))

  }


  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  const startEditTask = (task) => {
    setEditingTask(task)
    setIsTaskOpen(true)
  }

  return (


    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container'>

        <Header OpenModal={() => setIsTaskOpen(true)} />

        <TaskState
          tasks={tasks}
          filter={filter}
          setFilter={setFilter}
        />

        {isTaskOpen &&
          <div
            className='h-screen fixed inset-0 z-50 flex items-center justify-center bg-black/60'
            onClick={() => setIsTaskOpen(false)}>
            <div onClick={(e) => e.stopPropagation()}>
              <CreateTask
                closeModal={() => {
                  setIsTaskOpen(false)
                  setEditingTask(null)
                }}
                addTask={addTask}
                editingTask={editingTask}
              />
            </div>
          </div>
        }

        <Categories filter={filter} setFilter={setFilter} />

        <MadeTasks
          tasks={visibleTasks}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
          startEditTask={startEditTask}
        />

      </div>
    </motion.div>
  )
}

export default App
