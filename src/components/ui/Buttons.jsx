import React from 'react'
import { motion } from 'framer-motion'

const buttons = ({
    children,
    stiffness = 700,
    damping = 20,
    className
}) => {
    return (
        <div>
            <motion.button
                className={`text-white p-2 rounded-lg ${className || ''}`}
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9}}
                transition={{ type: "spring", stiffness, damping }}
            >
                {children}
            </motion.button>
        </div>
    )
}

export default buttons