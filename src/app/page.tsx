'use client'

import Image from 'next/image'


import borderMask from "./assets/border-mask.svg"
import bgBannerHeader from "./assets/banner.jpg"
import TortilhaImg from "./assets/tortilha.png"
import TortilhaImgMobile from "./assets/banner_mobile.jpg"
import Carrousel from "./components/TortilhasGrid"

export default function Home() {
  return (

    <main className="flex  flex-col items-center justify-between ">

      <div className='flex  w-full h-screen relative  items-center bg-primary z-0'>
        <Image
              src={bgBannerHeader}
              alt=''
              className='w-full  h-full object-cover absolute z-[-1] hidden md:block'
     
      />
        <Image
              src={TortilhaImgMobile}
              alt=''
              className='w-full  h-full object-cover absolute z-[-1] block md:hidden'
     
      />

         <Image
              src={borderMask}
              alt=''
              className='w-full absolute z-[-1] bottom-[-1px] left-0 right-0'
     
      />
     <div className=' container px-4 sm:px-0 grid mx-auto grid-cols-1 md:grid-cols-2 gap-10 md:px-5 items-center'>
     <div className='text-center lg:text-left'>
      <span className=' font-secondary text-secondary text-3xl lg:text-4xl xl:text-6xl'>Deliosa & Saborosa</span>
      <h1 className=' font-bold  text-5xl lg:text-6xl xl:text-8xl text-orange-100 mt-4'>Tortilhas <br/> <span className='text-secondary'>Sua Favorita</span></h1>
      <p className='text-orange-100 mt-4'>peça já sua tortilha, vai ser a melhor comida que 
      você irá comer hoje.
      </p>
      <a href='#' className='rounded-md bg-secondary text-orange-100 transition-colors px-7 py-3 mt-4 inline-block font-bold  hover:bg-opacity-90'>Peça já</a>
    </div>
    <div>
      <Image
      src={TortilhaImg}
      alt='Tortilha Image with price'
      />
    </div>
     </div>
    
        </div>

        <div className='overflow-x-hidden py-20  px-4 text-primary'>
          <span className='text-xs'>EXPERIMENTE</span>
          <h3 className='mb-10 text-2xl'>Nossos Sabores</h3>
          <Carrousel/>
        </div>
    </main>
   
  )
}
