import React from 'react'
import Buttons from './ui/buttons'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1 className='text-3xl font-bold'>TaskFlow Pro</h1>
                <p>Organize your life with style and efficiency ✨</p>
            </div>
            <div>
                <Buttons>New Task</Buttons>
            </div>
        </div>
    )
}

export default Header