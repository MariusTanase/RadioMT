import React from 'react'
import { ButtonType } from '../../types/types'

const CustomButton = (props : ButtonType) => {
    let { className, action, title} = props

    return (
        <button className={className} onClick={action}>
            {title}
        </button>
    )
}

export default CustomButton