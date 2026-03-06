import React from 'react'
import { motion } from 'framer-motion'
import { categories } from '../data/categories'
import { Pencil, Trash } from 'lucide-react'

const MadeTasks = ({ tasks, toggleTaskStatus, deleteTask, startEditTask }) => {


    return (

        <div className="task-container">
            <div>
                {tasks.map((task) => {
                    const getCategoryColor = categories.find(cat => cat.name === task.category)


                    return (
                        <motion.div
                            key={task.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.01 }}
                            className='w-full p-3 border-b border-purple-100'
                        >
                            <div className='madeTaskQuery flex items-center justify-between'>

                                <div className='flex flex-col'>
                                    {/* {LEFT SIDE} */}

                                    <div className='flex items-center gap-4'>
                                        <input
                                            type="checkbox"
                                            checked={task.status === "Completed"}
                                            onChange={() => toggleTaskStatus(task.id)}
                                            className="w-4 h-4 bg-gradient-to-br from-violet-600 to-fuchsia-600 border-gray-300 rounded"
                                        />
                                        <h2 className='text-lg font-semibold'>{task.title}</h2>



                                        <div className={`
                                        ${getCategoryColor?.styles.bg}
                                        ${getCategoryColor?.styles.text}
                                        ${getCategoryColor?.styles.border}
                                         border text-gray-700 px-3 py-1 text-xs rounded-2xl font-semibold shadow-sm`}>
                                            {task.category}
                                        </div>

                                    </div>

                                    <div className='flex items-start ml-8'>
                                        <p className='text-sm text-gray-600'>{task.description}</p>
                                    </div>

                                </div>

                                < div className='flex gap-2 mr-9'>
                                    {/* {RIGHT SIDE} */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Pencil 
                                            className='w-4 h-4 cursor-pointer text-gray-500 hover:text-blue-500' 
                                            onClick={() => startEditTask(task)}
                                        />
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Trash
                                            className='w-4 h-4 cursor-pointer text-gray-500 hover:text-red-500'
                                            onClick={() => deleteTask(task.id)}
                                        />
                                    </motion.div>
                                </div>

                            </div>

                        </motion.div>


                    )
                })}



            </div>
        </div >
    )
}

export default MadeTasks