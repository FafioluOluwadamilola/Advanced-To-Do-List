// import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CircleCheck } from 'lucide-react'
import { label } from 'motion/react-client'
import { categories } from '../data/categories'
import React from 'react'

const Categories = ({ filter, setFilter }) => {

  return (
    <div className='flex items-center mt-10 flex-col w-full'>
      <h1 className='text-2xl font-bold text-left background-clip'>Categories:</h1>

      <div className='flex justify-center items-center gap-3'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setFilter("All")}
          className={`m-2 p-2 w-30 text-sm rounded-lg text-black cursor-pointer
              ${filter === "All"
                  ?  "bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white"
                  : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-purple-200"
                }`}
        >
            📋 All
        </motion.div>
  
        <div className='flex flex-wrap gap-3'>
          {categories.map((cat) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              key={cat.name}
              onClick={() => setFilter(cat.name)}
              className={`m-2 p-2 w-30 text-sm rounded-lg text-black cursor-pointer
              ${filter === cat.name
                  ? `${cat.styles.gradient} text-white`
                  : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-purple-200"
                }`}
            >
              {cat.label}
            </motion.div>
          ))}
        </div>
      </div>

      <div className='mt-10 flex items-center justify-evenly w-full  rounded-2xl'>

        <h1
          onClick={() => setFilter("All")}
          className='sections border border-purple-200 shadow-sm shadow-purple-300'
        >All</h1>


        <h1
          onClick={() => setFilter("Active")}
          className='sections border border-red-200 shadow-sm shadow-red-300'
        >Active</h1>

        <h1
          onClick={() => setFilter("Completed")}
          className='sections border border-green-200 shadow-sm shadow-green-300'
        >
          Completed <CircleCheck className="inline ml-2 w-4 h-4 text-green-500" /></h1>
      </div>

    </div>
  )
}

export default Categories