import { useState } from "react";
import icon from '@/images/icon.png'
import { BsEnvelope } from 'react-icons/bs'
import { FiHome } from 'react-icons/fi'
import Link from "next/link";

const Navbar = () => {
    const [show, setShow] = useState(null);
    return (
        <div className="w-full font-neoSans select-none">
            <nav className="w-full mx-auto bg-white shadow xl:block hidden">
                <div className="justify-between container px-6 h-16 flex flex-row-reverse items-center lg:items-stretch mx-auto">
                    <div className="flex flex-row-reverse items-center">
                        <Link href={'/'}>
                            <div className="mr-10 flex items-center select-none cursor-pointer">
                                <img src={icon.src} className="w-10" alt="" />
                                <h3 className="text-base text-gray-800 font-semibold tracking-normal leading-tight ml-3 hidden lg:block">بطاقاتي</h3>
                            </div>
                        </Link>
                        <ul className="pr-24 xl:flex hidden items-center h-full">
                            <Link href={'/eid'}><li className="cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal mx-10 hover:text-t2">بطاقة تهنئة العيد</li></Link>
                            <Link href={'/'}><li className="cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal hover:text-t2">الرئيسية</li></Link>

                        </ul>
                    </div>

                </div>
            </nav>

            {/* MOBILE */}
            <nav>
                <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white ">
                    <div className="w-24">
                        <Link href={'/'}>
                            <div className="mr-10 flex items-center select-none">
                                <img src={icon.src} className="w-10" alt="" />
                                <h3 className="text-base text-gray-800 font-semibold tracking-normal leading-tight ml-3 ">بطاقاتي</h3>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div id="menu" className="text-gray-800" onClick={() => setShow(!show)}>
                            {show ? (
                                ""
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={4} y1={6} x2={20} y2={6} />
                                    <line x1={4} y1={12} x2={20} y2={12} />
                                    <line x1={4} y1={18} x2={20} y2={18} />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>

                {/*Mobile responsive sidebar*/}
                <div className={show ? "w-full h-full absolute z-40 xl:hidden transform  translate-x-0 " : "   w-full h-full absolute z-40 xl:hidden transform -translate-x-full"}>
                    <div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
                    <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                        <div className="px-6 h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="mt-6 flex w-full items-center justify-between">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                            </div>
                                            <div id="cross" className=" text-gray-800" onClick={() => setShow(!show)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={18} y1={6} x2={6} y2={18} />
                                                    <line x1={6} y1={6} x2={18} y2={18} />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="f-m-m">
                                        <a className="cursor-pointer">
                                            <li className="text-gray-800 ">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                                        <FiHome size={23} />
                                                    </div>
                                                    <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">الرئيسية</p>
                                                </div>
                                            </li>
                                        </a>
                                        <a className="cursor-pointer">
                                            <li className="text-indigo-700 mt-8">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                                                            <BsEnvelope size={22} />
                                                        </div>
                                                        <Link href={'/eid'}><p className="text-indigo-700 xl:text-base text-base ml-3">بطاقات تهنئة العيد</p></Link>

                                                    </div>

                                                </div>

                                            </li>
                                        </a>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar