import { useState } from "react";
import icon from '@/images/icon.png'

import Link from "next/link";
import MenuItems from "./MenuItems";
import { navigations } from "./navigations";


const Navbar = () => {
    const [show, setShow] = useState(null);

    return (
        <>
            <div dir="rtl" className="w-full font-neoSans select-none ">
                {/* Code block starts */}
                <nav className="w-full mx-auto bg-white shadow xl:block hidden">
                    <div className="justify-between container px-6 h-16 flex items-center lg:items-stretch mx-auto ">
                        <div className="flex items-center">
                            <Link href={'/'}>
                                <div className="ml-10 flex items-center select-none cursor-pointer">
                                    <img src={icon.src} className="w-10" alt="" />
                                    <h3 className="text-base text-gray-800 font-semibold tracking-normal leading-tight ml-3 hidden lg:block">بطاقاتي</h3>
                                </div>
                            </Link>
                            <ul className="flex list-none">
                                {navigations.map((menu, index) => {
                                    return <MenuItems items={menu} key={index} />;

                                })}
                            </ul>
                        </div>

                    </div>
                </nav>

                {/* MOBILE */}
                <nav>
                    {!show ? (
                        <div className="border py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white  top-0 z-0">
                            <div className="w-24">
                                <img src={icon.src} className="w-10" alt="" />
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
                    ) : null}


                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "shadow w-full h-full absolute z-40 xl:hidden transform  translate-x-0 " : " shadow  w-full h-full absolute z-40 xl:hidden transform -translate-x-full"}>
                        <div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
                        <div className="w-64 z-40 fixed overflow-y-auto0 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                            <div className="px-6 h-full">
                                <div className="flex flex-col justify-between h-full w-full">
                                    <div>
                                        <div className="mt-6 flex w-full items-center justify-between ">
                                            <div className="flex items-center justify-between w-full ">
                                                <div className="flex items-center select-none cursor-pointer">
                                                    <img src={icon.src} className="w-8" alt="" />
                                                    <h3 className="text-base tracking-normal leading-tight mr-3">بطاقاتي</h3>
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
                                        <ul className="flex flex-col mt-8">
                                            {navigations.map((menu, index) => {
                                                return <MenuItems items={menu} key={index} />;

                                            })}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Code block ends */}
            </div>
        </>
    );
}
export default Navbar