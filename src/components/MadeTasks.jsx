import React from 'react'
import { motion } from 'framer-motion'

const MadeTasks = ({ tasks, toggleTaskStatus }) => {

    return (

        <div className="task-container">
            <div>
                {tasks.map((task) => (
                    <motion.div
                        key={task.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.01 }}
                        className='flex flex-col items-start gap-1 p-3'
                    >
                        <div className='flex items-center gap-4'>
                            <input 
                                type="checkbox"
                                checked={task.status === "Completed"}
                                onChange={() => toggleTaskStatus(task.id)}
                                className="w-4 h-4 bg-gradient-to-br from-violet-600 to-fuchsia-600 border-gray-300 rounded"
                            />
                            <h2 className='text-lg font-semibold'>{task.title}</h2>

                            <div className='bg-red-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium'>
                                {task.category}
                            </div>
                            
                        </div>

                        <div className='flex flex-col items-start ml-8'>
                            <p className='text-sm text-gray-600'>{task.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default MadeTasks