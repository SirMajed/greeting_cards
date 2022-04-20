import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import Head from 'next/head'
import EidImage from 'src/components/EidImage'
import html2canvas from 'html2canvas';
import { Adsense } from '@ctrl/react-adsense';
import Script from 'next/script'
import img1 from '@/images/1.png'
import img2 from '@/images/2.png'
import img3 from '@/images/3.jpg'
import img4 from '@/images/4.png'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
const Eid = () => {
    const [name, setName] = useState('')
    const componentRef = useRef();
    const printRef = React.useRef();

    const images = [img1.src, img2.src, img3.src, img4.src,]
    const [index, setIndex] = useState(1)
    const [currentImage, setCurrentImage] = useState(images[3])

    let isMobile: boolean
    useEffect(() => {
        isMobile = /iPhone|iPad|iPod|Android/i.test(navigator?.userAgent);
        console.log(isMobile);
    }, [])

    const handleDownloadImage = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);

        const data = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
            link.href = data;
            link.download = 'image.jpg';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
    };

    const clickForward = () => {
        if (index + 1 === images.length) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }
    const clickBackward = () => {
        if (index - 1 === -1) {
            setIndex(images.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div className='flex flex-col justify-between h-screen'>
            {/* <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script> */}
            {/* <Script data-ad-client="ca-pub-9415820078929235" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script> */}
            <Head>
                <title>Happy Eid 2021</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <div className='flex justify-center'>
                <div ref={printRef} className="relative">
                    <div className="flex flex-col justify-center mx-auto text-center">
                        <EidImage image={images[index]} />
                    </div>
                    {/* <EidDesignCard /> */}
                    <div className="font-deco duration-300 right-0 top-20 absolute inset-0 z-10 flex justify-center items-center text-3xl text-t3">{name && name}</div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <MdKeyboardArrowLeft onClick={clickBackward} className='cursor-pointer text-t3' size={20} />
                <MdKeyboardArrowRight onClick={clickForward} className='cursor-pointer text-t3' size={20} />
            </div>
            <div className="flex flex-col lg:flex-col gap-10 items-center justify-center">
                {/* <p onClick={changeImage} className='text-t3 font-semibold cursor-pointer select-none'>تغيير الصورة</p> */}
                {/* <Adsense
                    client="ca-pub-7640562161899788"
                    slot="7259870550"
                /> */}




                <div className='flex flex-col'>
                    <input className='bg-field py-1.5 px-2 w-80 text-t3 rounded-md shadow-md  focus:outline-none text-right border border-1 border-gray-300' placeholder='ادخل اسمك هنا' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="flex items-center gap-0.5">
                    <Link href={'/'}>
                        <button className='mt-5 bg-button hover:bg-button hover:bg-opacity-80 text-white  rounded-tl-2xl rounded-bl-2xl p-2.5 shadow-md transition hover:shadow-lg focus:translate-y-1.5'>
                            العودة
                        </button>
                    </Link>
                    <button onClick={handleDownloadImage} className='mt-5 bg-t3 hover:bg-t3 hover:bg-opacity-80 text-white  rounded-tr-2xl rounded-br-2xl p-2.5 shadow-md transition hover:shadow-lg focus:translate-y-1.5'>
                        تحميل البطاقة
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Eid