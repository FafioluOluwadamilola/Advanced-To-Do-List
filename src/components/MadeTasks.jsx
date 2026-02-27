import React from 'react'
import { motion } from 'framer-motion'

const MadeTasks = () => {

    const tasks = [
        {
            title: "Finish React Project",
            description: "Complete the to-do application with all features and styling.",
            category: "Work",
            status: "Completed"
        },
        {
            title: "Grocery Shopping",
            description: "Buy ingredients for the week: milk, eggs, bread, and vegetables.",
            category: "Personal",
            status: "Active"
        },
        {
            title: "Doctor's Appointment",
            description: "Annual check-up at the clinic.",
            category: "Health",
            status: "Active"
        }
    ]

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
                            <input type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2" />
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