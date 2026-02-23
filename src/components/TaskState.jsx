import React from 'react'
import { motion } from 'framer-motion'

const TaskState = () => {
  return (
    <div className='tasks-count flex justify-around mt-12 '>
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="rounded-2xl shadow-md p-8 w-70 bg-[#FDFDFF]"
      >
        <p className="text-sm font-medium">Active Tasks</p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className= "rounded-2xl shadow-md p-8 w-70 bg-[#FDFDFF]"
      >
        <p className="text-sm font-medium">Completed</p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-2xl shadow-md p-8 w-70 bg-[#FDFDFF]"
      >
        <p className="text-sm font-medium">Completion Rate</p>
      </motion.div>
    </div>
  )
}

export default TaskState