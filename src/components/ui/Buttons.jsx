import React from 'react'
import { motion } from 'framer-motion'

const buttons = ({
    children,
    onClick,
    stiffness = 700,
    damping = 20,
    className
}) => {
    return (
        <div>
            <motion.button
                className={` p-2 rounded-lg ${className || ''}`}
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9}}
                transition={{ type: "spring", stiffness, damping }}
                onClick={onClick}
            >
                {children}
            </motion.button>
        </div>
    )
}

export default buttons