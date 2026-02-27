import React from 'react'
import Buttons from './ui/buttons'
import { motion } from 'framer-motion'
import { Sparkles, Plus } from 'lucide-react'

const Header = ({ OpenModal }) => {
    return (
        <div className="header">
            <div className="leftside">

                <motion.div 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className='background'
                >
                        <Sparkles className=" size-7 text-white" />
                </motion.div>

                <div>
                    <h1 className="text-3xl font-bold text-purple-700 text-left">
                        TaskFlow Pro
                    </h1>
                    <p className="text-gray-500">
                        Organize your life with style and efficiency ✨
                    </p>
                </div>

            </div>

            {/* RIGHT SIDE */}
            <Buttons
                onClick={OpenModal}
                className=" flex gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/50">
                <Plus className="size-5" />
                New Task
            </Buttons>
        </div>
    )
}

export default Header
