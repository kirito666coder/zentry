'use client'
import Image from "next/image";
import AnimatedTital from "@/components/AnimatedTital";
import { MouseEvent, useRef } from "react";
import gsap from "gsap";
import RoundedCorners from "@/components/RoundedCorners";
import Button from "@/components/Button";


export default function Story() {

    const frameRef = useRef<HTMLImageElement|null>(null)

    const handleMouseLeave = ()=>{

        const element = frameRef.current;

        gsap.to(element,{
            duration:0.3,
            rotateX:0,
            rotateY:0,
            ease:"power1.inOut"
        })
    }

    const handleMouseMove = (e:MouseEvent<HTMLImageElement>)=>{
        const {clientX,clientY} =e;

        const element = frameRef.current;

        if(!element){
            return;
        }

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width/2;
        const centerY = rect.height/2;

        const rotateX = ((y-centerY)/centerY) * -10;
        const rotateY = ((x-centerX)/centerX) * 10;

        gsap.to(element,{
            duration:0.3,
            rotateX,
            rotateY,
            transformPerspective:500,
            ease:"power1.inOut"
        })
    }

  return (
    <div id="story" className=" min-h-dvh overflow-hidden w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
            <p className="font-general text-sm uppercase md:text-[10px]">the multiversal ip world</p>

            <div className="relative size-full">
                <AnimatedTital
                title="The st<b>o</b>ry of <br/> a hidden real<b>m</b>"
                // sectionId="#story"
                className="mt-5 pointer-events-none mix-blend-difference relative z-10"
                />

              <div className="story-img-container">
                <div className="story-img-mask">
                    <div className="story-img-content">
                        <Image
                        ref={frameRef}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseLeave}
                        onMouseEnter={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        src={'/img/entrance.webp'}
                        alt="etrance"
                        width={1950}
                        height={1950}
                        className="object-contain h-full w-full"
                        />
                    </div>
                </div>
                <RoundedCorners/>
              </div>
            </div>

            <div className="-mt-80 flex w-full justify-center md:-mt-64  md:mr-44 md:justify-end">
                <div className="flex h-full w-fit flex-col items-center md:items-start">
                    <p className=" mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">entrance.webp Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.</p>

                    <Button
                    id="realm-button" title="discover prologue" className="mt-5"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}