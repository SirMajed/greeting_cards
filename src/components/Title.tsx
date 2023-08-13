import React from 'react'

type Props = {
    text: string
}

const Title = (props: Props) => {
    return (
        <h1 className='text-xl lg:text-3xl text-t2 font-normal font-neoSans'>{props.text}</h1>
    )
}

export default Title