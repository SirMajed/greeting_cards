import React, { useEffect, useState } from 'react'
import EidImage from 'src/components/EidImage'
import { imagesArr } from '@/utilities/index'
import reactCSS from 'reactcss'
import Layout from 'src/Layout'
import CardForm from '@/components/CardForm'

const Eid = () => {
    const [name, setName] = useState('')
    const printRef = React.useRef();
    const [index, setIndex] = useState(1)
    const [images, setImages] = useState([])
    const [colorr, setColorr] = useState("#056159");

    useEffect(() => {
        setImages([...imagesArr])
    }, [])


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

    const moveText = (position: string) => {
        const text = document.getElementById('name');
        switch (position) {
            case 'bottom':
                text.style.top = `${text.offsetTop + 45}px`;
                break;
            case 'top':
                text.style.top = `${text.offsetTop - 45}px`;
                break;
            case 'left':
                text.style.left = `${text.offsetLeft - 45}px`;
                break;
            case 'right':
                text.style.left = `${text.offsetLeft + 45}px`;
                break;
        }

    }
    const [color, setColor] = useState({
        r: '5',
        g: '97',
        b: '89',
        a: '1',
    })
    const styles = reactCSS({
        'default': {
            color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `${colorr}`,
            },
            swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
            },
            popover: {
                position: 'absolute',
                zIndex: '2',
            },
            cover: {
                position: 'relative',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        },
    });

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return (
        <Layout>

            <div className="flex w-full h-full pt-52 lg:pt-0 items-center justify-center ">

                    <div className="grid w-11/12 lg:w-1/2 grid-cols-1 lg:grid-cols-2 justify-center mt-0 ">
                        <div className="pb-6 md:pb-0 md:pr-6 ">
                            <EidImage name={name} image={images[index]?.src} printRef={printRef} clickBackward={clickBackward} clickForward={clickForward} colorr={colorr} />
                        </div>
                        <div className="mt-0 lg:mt-4">
                            <CardForm color={color} printRef={printRef.current} colorr={colorr} setColorr={setColorr} handleTextChange={handleTextChange} moveText={moveText} name={name} styles={styles} />
                        </div>
                    </div>
               
            </div>
        </Layout>
    )
}
export default Eid