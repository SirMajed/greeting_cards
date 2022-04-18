import Image from "next/image";
import React from "react";
import eidimage from '@/images/test.png'



const ComponentToPrint = () => {
  return <Image alt='Image' src={eidimage.src} draggable={false} height="450" width="350" />

}
export default ComponentToPrint

