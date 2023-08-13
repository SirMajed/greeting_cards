import Link from 'next/link'
import React from 'react'

type Props = {
    menus: Array<any>
}

const SubMenu = (props: Props) => {
    return (<ul className="bg-white text-gray-800 shadow rounded py-1 w-32 left-0 mt-16 -mr-4 absolute  top-0">
        {props.menus.map(item => {
            return <Link href={item.path}><li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-t2 px-3 font-normal">{item.name}</li></Link>

        })}
    </ul>)
}

export default SubMenu