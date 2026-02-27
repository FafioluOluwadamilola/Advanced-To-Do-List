import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion';
import { useState } from 'react';
import Buttons from '../components/ui/Buttons';
import React from 'react'

const CreateTask = ({ closeModal }) => {

    const [selectedButton, setSelectedButton] = useState("work")

    const categories = [
        { id: "work", label: "💼 Work" },
        { id: "personal", label: "🏠 Personal" },
        { id: "urgent", label: "🚨 Urgent" },
        { id: "learning", label: "📚 Learning" },
        { id: "health", label: "🏥 Health" },
        { id: "finance", label: "💰 Finance" },
    ]

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

                        <input
                            type="text"
                            placeholder="Complete the Design Mockups...."
                            className="w-full p-3 border border-gray-400 outline-none rounded-lg bg-white/50 transition-all duration-300 focus:shadow-[0_0_20px_rgba(128,128,128,0.4)]" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className='flex flex-col gap-2'
                    >
                        <label className='text-left text-sm font-medium text-gray-700'>Description</label>
                        <textarea
                            type="text"
                            placeholder="Add more notes or details about this task."
                            rows={4}
                            className=" w-full p-3 bg-white/50 rounded-lg border border-gray-400 outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(128,128,128,0.4)]" />
                    </motion.div>


                </form>

                <div className='grid grid-cols-3 gap-3 mt-3 p-2'>
                    {categories.map((cat) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 700, damping: 40 }}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            className={`px-4 py-2 rounded-lg font-medium cursor-pointer
                                ${selectedButton === cat.id ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30" : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"}`}
                            onClick={() => setSelectedButton(cat.id)}
                        >
                            {cat.label}
                        </motion.div>
                    ))}

                </div>


                <div className='submit'>
                    <Buttons className='bg-white font-[32px] p-3 text-black'>Cancel</Buttons>
                    <Buttons className='text-white p-3 bg-gradient-to-r from-violet-600 to-fuchsia-600' onClick={closeModal}>
                        ✨ Create Task
                    </Buttons>
                </div>

            </div>



        </div>
    )
}

export default CreateTask