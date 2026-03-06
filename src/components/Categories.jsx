// import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownWideNarrow, CircleCheck, ToggleRight } from 'lucide-react'
import { categories } from '../data/categories'
import React from 'react'

const Categories = ({ filter, setFilter }) => {

  return (
    <div className='flex items-center mt-10 flex-col w-full'>
      <h1 className='text-2xl font-bold text-left background-clip'>Categories:</h1>

      <div className='categoriesQuery mt-2 flex items-center justify-center flex-wrap gap-2'>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setFilter("All")}
          className={`m-2 p-2 w-30 text-sm rounded-lg text-black cursor-pointer
              ${filter === "All"
              ? "bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white"
              : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-purple-200"
            }`}
        >
          📋 All
        </motion.div>

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



      <div className='btns-3'>
        <button
          className={'btn' + (filter === 'All' ? ' bg-[#FBF4FF]/90' : '')}
          onClick={() => setFilter('All')}>
          <ArrowDownWideNarrow />
          All
        </button>

        <button
          className={'btn' + (filter === 'Active' ? ' bg-[#FBF4FF]/90' : '')}
          onClick={() => setFilter('Active')}>
          <ToggleRight />
          Active
        </button>

        <button
          className={'btn' + (filter === 'Completed' ? ' bg-[#FBF4FF]/90' : '')} onClick={() => setFilter('Completed')}>
          <CircleCheck />
          Completed
        </button>
      </div>

    </div>
  )
}

export default Categories