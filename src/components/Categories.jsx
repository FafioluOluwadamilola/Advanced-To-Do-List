import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CircleCheck } from 'lucide-react'

const Categories = () => {

  const [isSelected, setIsSelected] = useState("All")

  const category = [
    {
      name: 'All',
      color: 'bg-gradient-to-br from-violet-600 to-fuchsia-600'
    },
    {
      name: 'Work',
      color: 'bg-blue-500'
    },
    {
      name: 'Personal',
      color: 'bg-green-500'
    },
    {
      name: 'Urgent',
      color: 'bg-red-500'
    },
    {
      name: "Learning",
      color: 'bg-yellow-500'
    },
    {
      name: "Health",
      color: 'bg-pink-500'
    },
    {
      name: "Finance",
      color: 'bg-teal-500'
    }
  ]

  return (
    <div className='flex items-center mt-10 flex-col w-full'>
      <h1 className='text-2xl font-bold text-left background-clip'>Categories:</h1>

      <div className='flex flex-wrap gap-3'>
        {category.map((cat) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            key={cat.name}
            onClick={() => setIsSelected(cat.name)}
            className={`m-2 p-2 w-30 text-sm rounded-lg text-black cursor-pointer
            ${isSelected === cat.name
                ? cat.color + " text-white"
                : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-purple-200"
              }`}
          >
            {cat.name}
          </motion.div>
        ))}
      </div>

      <div className='mt-10 flex items-center justify-evenly w-full  rounded-2xl'>
        <h1 className='sections border border-purple-200 shadow-sm shadow-purple-300'>All</h1>
        <h1 className='sections border border-red-200 shadow-sm shadow-red-300'>Active</h1>
        <h1 className='sections border border-green-200 shadow-sm shadow-green-300'>
          Completed <CircleCheck className="inline ml-2 w-4 h-4 text-green-500" /></h1>
      </div>

    </div>
  )
}

export default Categories