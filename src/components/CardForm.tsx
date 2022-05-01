import { FC, useState } from "react"
import { BiDownload } from "react-icons/bi"
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io"
import { downloadImage } from "../utilities"
import ColorPicker from "./colorPicker"
import axios from 'axios'

interface Props {
    name: any,
    handleTextChange: any,
    color: any
    colorr: any
    setColorr: any
    styles: any
    moveText: any
    printRef: any
}
const CardForm: FC<Props> = ({ name, handleTextChange, color, colorr, setColorr, styles, moveText, printRef }) => {
    const [data, setData] = useState<any>()
    const downloadImg = async () => {
        const res = await axios('/api')
        console.log(res.data);
        setData(res.data.message)
    }
    return (
        <div className='flex flex-col items-center lg:items-end '>
            <h1 className='font-neoSans text-2xl text-t3 text-right'>صمم بطاقتك الان</h1>
            <h1 className='font-neoSans text-md text-gray-700 mt-4 lg:mt-10'> ادخل اسمك - </h1>
            <div className="flex flex-col lg:flex-col items-end ">
                <div className='flex flex-col mt-4 mb-1 w-full'>
                    <input type="text" value={name} onChange={handleTextChange} color={color.g} className='bg-field py-1.5  px-2 text-t3 rounded-md shadow-md  focus:outline-none text-right border border-1 border-gray-300' placeholder='ادخل الاسم' />
                </div>

                <div className="relative">
                    <div className="flex items-center gap-4 mt-6">
                        <ColorPicker color={colorr} setColor={setColorr} styles={styles} />
                        {/* <HexColorPicker color={colorr} onChange={setColorr} /> */}
                        <h1 className='font-neoSans text-md text-gray-700 mb-2'> اختر لون النص - </h1>

                    </div>
                </div>


                <div className="flex items-center gap-2 mt-6">
                    <div className="buttons flex items-center gap-1">
                        <div onClick={() => moveText('bottom')} className='bg-gray-800 text-white p-1.5 rounded-md cursor-pointer'><IoIosArrowDown /></div>
                        <div onClick={() => moveText('top')} className='bg-gray-800 text-white p-1.5 rounded-md cursor-pointer'><IoIosArrowUp /></div>
                        <div onClick={() => moveText('left')} className='bg-gray-800 text-white p-1.5 rounded-md cursor-pointer'><IoIosArrowBack /></div>
                        <div onClick={() => moveText('right')} className='bg-gray-800 text-white p-1.5 rounded-md cursor-pointer'><IoIosArrowForward /></div>
                    </div>
                    <h1 className='font-neoSans text-md text-gray-700'> حدد موقع النص - </h1>
                </div>

                <button onClick={() => downloadImage(printRef)} type="button" className="flex items-center gap-2 justify-center mt-10 w-full text-white bg-gradient-to-br hover:transition from-b1 to-b2 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-b2 rounded-lg text-md px-5 py-2 text-center mr-2 mb-2">
                    <BiDownload size={25} />
                    تحميل البطاقة
                </button>
                <p className="text-gray-500 text-xs">تنبيه لأجهزة الايفون</p>
                <p className="text-gray-500 text-xs">بعد تحميل الصورة, اضغط على الايقونة الزرقاء</p>
                <p className="text-gray-500 text-xs">ثم ستجدها في خانة التحميلات</p>
                <p>{data && data}</p>

            </div>
        </div>
    )
}
export default CardForm