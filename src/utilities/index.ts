import html2canvas from "html2canvas";
import img1 from '@/images/1.png'
import img2 from '@/images/2.png'
import img3 from '@/images/3.png'
import img4 from '@/images/4.png'
import img5 from '@/images/5.png'
import img6 from '@/images/6.png'

export const downloadImage = async (image: any) => {
    const canvas = await html2canvas(image)
    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
        link.href = data;
        link.download = 'EidCard';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(data);
    }
}

export const imagesArr = [
    {
        src: img1.src,
        id: 1,
        selected: false
    },
    {
        src: img2.src,
        id: 2,
        selected: false
    },
    {
        src: img3.src,
        id: 3,
        selected: false
    },
    {
        src: img4.src,
        id: 4,
        selected: false
    },

    {
        src: img5.src,
        id: 5,
        selected: false
    },
    {
        src: img6.src,
        id: 6,
        selected: false
    }
]