import { Children, FC, useState } from "react";
import icon from '@/images/icon.png'
import { BsEnvelope } from 'react-icons/bs'
import { FiHome } from 'react-icons/fi'
import Link from "next/link";
interface Props {
    children?: JSX.Element | JSX.Element[]
}
const Navbar: FC<Props> = ({ children }) => {
    const style = {
        height: 86,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23056159' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
    }

    const [show, setShow] = useState(null);
    const [product, setProduct] = useState(false);
    return (
        // <div style={style} className="w-full h-20 ">
        // </div>
        // bg-gray-200 h-full w-full
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
                            {/* <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gry-800 mx-10 tracking-normal relative" onClick={() => setProduct(!product)}>
                                <span className="ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </span>
                                {product && (
                                    <ul className="bg-white shadow rounded py-1 w-32 left-0 mt-16 -ml-4 absolute  top-0">
                                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-t2 px-3 font-normal">بطاقة تهنئة للعيد</li>
                                    </ul>
                                )}
                                البطاقات

                            </li> */}

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
            {/* <main className="h-full overflow-x-hidden mt-14 lg:mt-0 flex flex-col relative">
                <div className="h-full container px-2 md:px-6 mx-auto transition-all duration-500 sticky top-0 z-50">
                    {children}
                </div>
            </main> */}
        </div>
    )
}
export default Navbar