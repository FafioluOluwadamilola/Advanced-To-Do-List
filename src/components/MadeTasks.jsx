import React from 'react'
import { motion } from 'framer-motion'

const MadeTasks = ( { tasks } ) => {

    return (

        <div className="task-container">
            <div>
                {tasks.map((task, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.01 }}
                        className='flex flex-col items-start gap-1 p-3'
                    >
                        <div className='flex items-center gap-4'>
                            <input type="checkbox" className="w-4 h-4 bg-gradient-to-br from-violet-600 to-fuchsia-600 border-gray-300 rounded" />
                            <h2 className='text-lg font-semibold'>{task.title}</h2>
                        </div>

                        <div className='flex flex-col items-start ml-8'>
                        <p className='text-sm text-gray-600'>{task.description}</p>
                            {task.category}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default MadeTasks