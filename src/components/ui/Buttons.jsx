import React from 'react'
import { motion } from 'framer-motion'

const buttons = ({
    children,
    stiffness = 900,
    damping = 20,
}) => {
    return (
        <div>
            <motion.button
                className='bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white'
                whileHover={{ scale: 1.1, y: -2}}
                whileTap={{ scale: 1.2, y: 1}}
                transition={{ type: "spring", stiffness, damping }}
            >
                {children}
            </motion.button>
        </div>
    )
}

export default buttons