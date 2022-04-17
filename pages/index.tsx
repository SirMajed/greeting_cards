import bg from '@/images/bgg.png'
import Image from 'next/image'
import ntis from '@/images/ntis.png'
import EidCard from 'src/components/EidCard'
import Link from 'next/link'
export default function Index() {
  return (
    <div className='bg-bg'>
      <Image src={ntis.src} width="270" height="110" />


      <div className="bg-bg flex flex-col lg:flex-row gap-10 items-center justify-center h-screen">


        <div>
          <Image src={bg.src} height="400" width="600" />
        </div>

        <div>
          <p className='text-t4  text-3xl'>عيد فطر سعيد عليكم</p>
          <h1 className='text-7xl font-black font-tajwal'><span className='text-t1'>Eid</span> <span className='text-t2'>al-Fiter</span> <span className='text-t3'>Mubarak</span></h1>
          <p className='text-lg text-gray-400'>كل عام وأنتم بخير، وأسأل الله أن يتقبل طاعتكم، وصيامكم، وقيامكم، وأن يجعل عيدكم كله فرح وسرور.</p>
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
