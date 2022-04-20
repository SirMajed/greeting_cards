import Image from "next/image";
import React from "react";


const ComponentToPrint = ({ image }) => {
  return <Image className="bg-red-500 px-10" alt='Image' src={image} draggable={false} height="450" width="350" />

}
export default ComponentToPrint

