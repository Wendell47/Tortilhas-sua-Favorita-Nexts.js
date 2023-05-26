import { HeartIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'
import TortilhaImg from "../../assets/tortilhas-1.png"

export default function Carrousel() {

    const cards = [
            {
                img:TortilhaImg,
                title:'Queijo e presunto',
                price:'5,90',
                
            },
            {
                img:TortilhaImg,
                title:'Queijo e toto',
                price:'5,90',
                
            },
            {
                img:TortilhaImg,
                title:'Queijo e bibo',
                price:'5,90',
                
            },
            {
                img:TortilhaImg,
                title:'Queijo e bibo',
                price:'5,90',
                
            },
    ]
    return (


     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7  container">

        {cards.map((cardContent) => (
            <div key={cardContent.title} className="p-3 bg-[#FFEBD4] rounded-3xl transition outline outline-0 hover:outline-1">
            <Image
            src={cardContent.img}
            width={500}
            height={500}
            alt=""
            className="w-full "
            />
            <div className="p-5 bg-[#FFF2E0] rounded-2xl ">
            <h3 className=" font-bold ">{cardContent.title}</h3>
            <div className="flex justify-between items-center"><span>R$ {cardContent.price}</span> <HeartIcon className="w-4 h-4"/></div>
            </div>
            </div>
        ) 
        )}
      
     </div> 
    )
  }