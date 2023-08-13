import Center from "@/components/Center"
import Title from "@/components/Title"
import { images, backgrounds } from './components/images'
import Draggable from 'react-draggable'; // Both at the same time
import { useRef, useState } from "react";

const CustomDesign = () => {
    const nodeRef = useRef(null);
    const [image, setImage] = useState<any>()
    const [name, setName] = useState('')

    return (
        <>
            <Center className="mt-4 lg:mt-6">
                <Title text="صمم بطاقتك بنفسك" />
            </Center>

            <div className="flex h-full  gap-12 justify-center mt-10">

                <div className="flex flex-col items-center gap-2">
                    <div style={{ background: backgrounds[1].src }} className="text-center justify-center mx-auto bg-contain h-3/5 rounded-md w-4/5">
                        <Draggable>
                        <h1 className="font-neoSans text-2xl cursor-grab">{name}</h1>
                        </Draggable>
                        <img src={image && image} className="bg-cover h-full" alt="" />
                    </div>
                    <input value={name} onChange={(e: any)=>setName(e.target.value)} dir="rtl" type="text" className="border-2 rounded py-1 px-2 text-right" placeholder="أدخل اسمك" />
                </div>



                <div className="flex flex-col items-start gap-4">

                    {/* SELECT TEXT */}
                    <div className="border rounded-md p-3 bg-white shadow">
                        <h1 className="text-xl">إختر الشكل المناسب</h1>
                        <hr className="my-2" />
                        <div className="grid grid-cols-2 items-center justify-center gap-4 h-64 ">
                            {images.map((img) => {
                                return <div className="overflow-x-scroll" key={img.src}><Draggable defaultClassNameDragging="overflow-auto" nodeRef={nodeRef}>
                                    <img ref={nodeRef} draggable={false} src={img.src} className="w-32 cursor-grab " alt="" />
                                </Draggable></div>

                            })}
                        </div>
                    </div>

                    {/* SELECT BACKGROUND */}
                    <div className="border rounded-md p-3">
                        <h1 className="text-xl">إختر الخلفية</h1>
                        <hr className="my-2" />
                        <div className="grid grid-cols-2 items-center justify-center gap-4 overflow-scroll h-64">
                            {backgrounds.map((img) => {
                                return <img ref={nodeRef} onClick={() => {
                                    setImage(img.src)
                                }} draggable={false} src={img.src} className="w-32 cursor-pointer] " alt="" />
                            })}
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
export default CustomDesign