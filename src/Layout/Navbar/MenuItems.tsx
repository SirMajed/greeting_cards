import Link from 'next/link'
import React, { useState } from 'react'
import Dropdown from './Dropdown'

type Props = {
    items: any
}

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <li className="relative text-md mx-2">
            {items.submenu ? (
                <>
                    <button className='hover:border-b hover:border-b-t2 transition bg-transparent cursor-pointer w-full text-right p-1' aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)} type="button" aria-haspopup="menu">
                        {items.name}{" "}
                    </button>
                    <Dropdown dropdown={dropdown}  submenus={items.submenu} />
                </>
            ) : (
                <a className='p-1 text-right block hover:border-b transition hover:border-b-t2' href="/#">{items.name}</a>
            )}
        </li>
    );
}


export default MenuItems