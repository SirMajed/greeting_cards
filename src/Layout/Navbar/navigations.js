import { BiPaint } from 'react-icons/bi'
import { BsMoonStars } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'

export const navigations = [
    {
        name: 'الرئيسية',
        icon: (
            <AiOutlineHome
                size="20"
                className="text-tlight dark:text-tdark ml-2.5"
            />
        ),
        path: '/',
    },

    {
        id: 2,
        name: 'تصاميم عيد الفطر',
        path: '/eid',
        submenu: [
            {
                name: 'تصاميم جاهزة',
                path: '/eid'
            },
            {
                name: 'صمم بنفسك',
                path: '/eid/custom',
                soon:true
            },
        ],
        icon: (
            <BsMoonStars
                size="20"
                className="text-tlight dark:text-tdark ml-2.5"
            />
        ),
    },

]