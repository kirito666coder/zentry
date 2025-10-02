import { ReactNode } from "react"

type BentoCardProps = {
    src:string,
    title:ReactNode,
    description:string,
    isComingSoon?:boolean
    }
    
export const BentoCard = ({src,title,description,isComingSoon}:BentoCardProps) =>{
      return(
        <div className="relative size-full ">
          <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-center object-cover"
          />
          <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
          <div>
         <h1 className="bento-title special-font">{title}</h1>
         {
           description &&(
             <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
            )
          }
          </div>
          </div>
        </div>
      )
    }
    