import React from 'react'
import { motion } from 'framer-motion'
import { CircleCheck, Target, TrendingUp } from 'lucide-react';

const TaskState = () => {
  return (
    <div className='grid grid-cols-1 gap-4 mt-6 relative md:grid-cols-3'>

      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        className="p-4 rounded-xl bg-white/80 backdrop-blur-3xl shadow-md border border-violet-200"
      >

        <div className='flex justify-between items-center'>

          <div>
            <p className="text-sm text-gray-600 font-medium">Active Tasks</p>
            <p className='text-left text-violet-600 text-3xl font-bold mt-1'>12</p>
          </div>

          <div className='p-3 bg-violet-100 rounded-xl'>
            <Target className='text-violet-600 size-6' />
          </div>

        </div>


      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        className="p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-md border border-emerald-200"
      >

        <div className='flex justify-between items-center'>

          <div>
            <p className="text-sm text-gray-600 font-medium">Completed</p>
            <p className='text-left text-emerald-600 text-3xl font-bold mt-1'>12</p>
          </div>

          <div className='p-3 bg-emerald-100 rounded-xl'>
            <CircleCheck className='text-emerald-600 size-6' />
          </div>

        </div>

      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        className="p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-md border border-amber-100"
      >

        <div className='flex justify-between items-center'>

          <div>
            <p className="text-sm text-gray-600 font-medium">Completed</p>
            <p className='text-left text-amber-600 text-3xl font-bold mt-1'>12%</p>
          </div>

          <div className='p-3 bg-amber-100 rounded-xl'>
            <TrendingUp className='text-amber-600 size-6' />
          </div>

        </div>


      </motion.div>
    </div>
  )
}

export default TaskState