import React from 'react'

type Props = {
    children: JSX.Element | JSX.Element[]
    className?: string
}

const Center = (props: Props) => {
    return (
        <div className={`flex justify-center items-center ${props.className}`}>{props.children}</div>
    )
}

export default Center