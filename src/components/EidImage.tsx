import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const ComponentToPrint = ({ image, printRef, colorr, clickBackward, clickForward, name }) => {
  return (
    <div>
      <div ref={printRef} className="relative shadow-md">
        <div className="flex flex-col justify-center mx-auto text-center select-none ">
          <img alt='Image' src={image} className='' draggable={false} />
        </div>
        <div style={{ color: colorr }} id='name' className="select-none font-neoSans duration-300 right-0  absolute inset-0 z-10 flex justify-center items-center text-xl xl:text-2xl text-t3">{name && name}</div>
      </div>
      <div className='flex items-center justify-center gap-6 mt-2'>
        <MdKeyboardArrowLeft onClick={clickBackward} className='cursor-pointer text-t3' size={30} />
        <MdKeyboardArrowRight onClick={clickForward} className='cursor-pointer text-t3' size={30} />
      </div>
    </div>
  )

}
export default ComponentToPrint

