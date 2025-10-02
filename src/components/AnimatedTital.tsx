"use client"
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

type Props = {
    title:string,
    className:string,
}

export default function AnimatedTital({title ,className}: Props) {
    
    const containerRef = useRef<HTMLDivElement|null>(null)

    useEffect(() => {
      const ctx = gsap.context(()=>{
        const titleAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:containerRef.current,
                start:'100 bottom',
                end:'center bottom',
                toggleActions:'play none none reverse'
            }
        })
        titleAnimation.to('.animated-word',{
            opacity:1,
            transform:'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
            ease:'power2.inOut',
            stagger:0.02,
        })
      },containerRef)

      return ()=> ctx.revert()
    }, [])
    
  return (
    <div 
    ref={containerRef}
    className={`animated-title ${className}`}>
               {
                title.split('<br/>').map((line,index)=>(
                    <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'>
                        {
                            line.split(' ').map((word,i)=>(
                                <span key={i} className='animated-word' dangerouslySetInnerHTML={{ __html:word}}/>
                            ))
                        }
                    </div>
                ))
               }
            </div>
  )
}