import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion';
import React from 'react'

const CreateTask = () => {
    return (

        <div className='task-creation'>

            <div className='heading'>

                <div className='background p-2'>
                    <Sparkles className='text-white size-7' />
                </div>

                <div>
                    <h2 className='text-2xl font-bold background-clip text-left'>Create New Task</h2>
                </div>

            </div>

            <div >
                <p className='text-left text-lg text-gray-600 mt-2'>Fill in the details to create an awesome new task! ✨</p>
            </div >


            <div>
                <form className='flex flex-col p-3 gap-3 mt-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className='flex flex-col gap-1'
                    >
                        <label className='text-left text-sm font-medium text-gray-700'>Title</label>

                        <input type="text" placeholder="Complete the Design Mockups...." className="p-3 border border-purple-200 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:shadow-amber-800" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className='flex flex-col gap-2'
                    >
                        <label className='text-left text-sm font-medium text-gray-700'>Description</label>
                        <textarea
                            type="text"
                            placeholder="Add more notes or details about this task."
                            rows={4}
                            className=" w-full p-3 rounded-lg border border-gray-300
                            outline-none transition-all duration-300
                                focus:shadow-[0_0_20px_rgba(128,128,128,0.4)]
                            " />
                    </motion.div>


                </form>
            </div>



        </div>
    )
}

export default CreateTask