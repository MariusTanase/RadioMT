import React from 'react'
import { ButtonType } from '../../types/types'

const CustomButton = (props : ButtonType) => {
    let { className, action, title, isHidden } = props

    return (
        <button className={className} onClick={action}>
            {title}
        </button>
    )
}

export default CustomButton