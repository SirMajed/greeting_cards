import Image from "next/image";
import React from "react";
import imgg from '../../public/test.jpg'



const ComponentToPrint = () => {
  return <Image alt='Image' src={imgg} draggable={false} height="450" width="350" />

}
export default ComponentToPrint

