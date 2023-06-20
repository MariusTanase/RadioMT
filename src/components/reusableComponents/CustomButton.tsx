import React from 'react'

type ButtonType = {
    className: string,
    action: () => void,
    title: string
}


const CustomButton = (props : ButtonType) => {
    const { className, action, title } = props

    return (
        <button className={className} onClick={action}>
            {title}
        </button>
    )
}

export default CustomButton