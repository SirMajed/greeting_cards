import Image from "next/image"
import Link from "next/link"
import bg from '@/images/bgg.png'

const Home = () => {
    return (
        <div className="flex items-center h-full justify-center ">
            <div className='flex flex-col lg:flex-row gap-10 items-center justify-center'>
                <div>
                    <Image alt='Image' src={bg} height="400" width="600" />
                </div>

                <div className='text-center lg:text-right select-none px-3 lg:px-5 xl:px-0'>
                    <p className='text-t4  text-xl lg:text-3xl'>عيد فطر سعيد</p>
                    <h1 className='text-4xl lg:text-5xl xl:text-7xl text-center  lg:text-left font-black font-tajwal'><span className='text-t2'>Eid</span> <span className='text-t2'>al-Fiter</span> <span className='text-t3'>Mubarak</span></h1>
                    <p className='text-sm lg:text-lg text-gray-400'>كل عام وأنتم بخير، وأسأل الله أن يتقبل طاعتكم، وصيامكم، وقيامكم، وأن يجعل عيدكم كله فرح وسرور.</p>
                    <Link href={'/eid'}>
                        <button className='mt-5 bg-button hover:bg-button hover:bg-opacity-80 text-white  rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl p-2.5 shadow-md transition hover:shadow-lg focus:translate-y-1.5'>
                            انشئ بطاقة معايدة
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home