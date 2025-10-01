 'use client'
import { MouseEvent, ReactNode, useRef, useState } from "react"

type BentoTiltProps = {
    children:ReactNode,
    className:string
  }
  
export const BentoTilt = ({children,className=''}:BentoTiltProps)=>{
  
    const [transformStyle, settransformStyle] = useState<string>('')
    const itemRef = useRef<HTMLDivElement|null>(null)
  
    const handleMouseMove = (e:MouseEvent<HTMLDivElement>)=>{
      if(!itemRef.current) return;
  
      const {left,top,width,height} = itemRef.current.getBoundingClientRect();
  
      const relativeX = (e.clientX-left)/width;
      const relativeY = (e.clientY-top)/height;
  
      const tiltX = (relativeX-0.5)*5;
      const tiltY = (relativeY-0.5)*-5;
  
      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`
  
      settransformStyle(newTransform)
    }
  
    const handleMouseLeave = ()=>{
      settransformStyle('')
    }
  
    return(
      <div
      ref={itemRef}
      className={` ${transformStyle==="" ?'transition-all  duration-1000 ':'duration-150'}  ${className}`}
      style={{transform:transformStyle}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    )
  }
  