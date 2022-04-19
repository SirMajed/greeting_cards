import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import Head from 'next/head'
import EidImage from 'src/components/EidImage'

const Eid = () => {
    const [name, setName] = useState('')
    const componentRef = useRef();
    return (
        <div className='flex flex-col justify-between h-screen'>
            <Head>
                <title>Happy Eid 2021</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="flex flex-col lg:flex-col gap-10 items-center justify-center">
                <Navbar />
                <div ref={componentRef} className="relative">
                    <EidImage />
                    <div className="font-deco duration-300 right-24 absolute inset-0 z-10 flex justify-center items-center text-4xl text-t3">{name && name}</div>
                </div>



                <div className='flex flex-col'>
                    <input className='bg-field py-1.5 px-2 w-80 text-t3 rounded-md shadow-md  focus:outline-none text-right border border-1 border-gray-300' placeholder='ادخل اسمك هنا' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="flex items-center gap-1">
                    <Link href={'/'}>
                        <button className='mt-5 bg-button hover:bg-button hover:bg-opacity-80 text-white  rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl p-2.5 shadow-md transition hover:shadow-lg focus:translate-y-1.5'>
                            العودة
                        </button>
                    </Link>
                    <button onClick={async () => {
                        const { exportComponentAsPNG } = await import('react-component-export-image')
                        exportComponentAsPNG(componentRef)
                    }} className='mt-5 bg-t3 hover:bg-t3 hover:bg-opacity-80 text-white  rounded-tl-2xl rounded-tr-2xl rounded-br-2xl p-2.5 shadow-md transition hover:shadow-lg focus:translate-y-1.5'>
                        تحميل البطاقة
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Eid