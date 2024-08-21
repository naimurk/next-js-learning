import Image from 'next/image';
import React from 'react';
// relative paths
// import nextJsImage from "../../assets/nexog.png"
// absolute paths 
import nextJsImage from "@/assets/nexog.png"

const Gallery = () => {
    return (
        <div>
          <div className='max-w-7xl mx-auto flex flex-col items-center mt-3'>
          <h1>Regular image</h1>
          <img width={500} height={500} src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E" alt="random picsum" />
          </div>
          <div className='max-w-7xl mx-auto flex flex-col items-center mt-3'>
          <h1>nextjs image</h1>
         <Image src={`https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E`}width={500} height={500}></Image>
          </div>
          <div className='max-w-7xl mx-auto flex flex-col items-center mt-3'>
          <h1>nextjs Local image</h1>
         <Image src={nextJsImage}width={500} height={500}></Image>
          </div>
        </div>
    );
};

export default Gallery;