'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Button from "./Button"
import { TiLocationArrow } from "react-icons/ti"
import Link from "next/link"

const navItems = ['Nexus','Vault','Prologue','About','Contact']

export default function NavBar() {

    const [isAudioPlaying, setisAudioPlaying] = useState<boolean>(false)
    const [isIndicatorActive, setisIndicatorActive] = useState<boolean>(false)
    
    const navContainerRef = useRef<HTMLDivElement|null>(null)
    const audioElementRef = useRef<HTMLAudioElement|null>(null)

    const toggleAudioIndicator = ()=>{
      setisAudioPlaying(!isAudioPlaying)

      setisIndicatorActive(!isIndicatorActive)
    }

    useEffect(() => {
      if(isAudioPlaying){
        audioElementRef.current?.play()
      }else{
        audioElementRef.current?.pause()
      }
    }, [isAudioPlaying])
    

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2 ">
      <nav className="flex size-full items-center justify-between p-4">
       <div className="flex items-center gap-7 ">
          <Image src={'/img/logo.png'} alt="logo" height={100} width={100} className="w-10"/>
           <Button
           id="product-button"
           title="product"
           RightIcon={<TiLocationArrow/>}
           className="bg-blue-50 md:flex hidden items-center justify-center gap-1"
           />
       </div>
       <div className="flex h-full items-center">
        <div className="hidden md:block">
         {
            navItems.map((items)=>(
            <Link className="nav-hover-btn" key={items} href={`#${items.toLowerCase()}`} >
                {items}
            </Link>
            ))
         }
        </div>

        <button onClick={toggleAudioIndicator} className="ml-10 flex items-center space-x-0.5">
             <audio ref={audioElementRef} className="hidden" src={'/audio/loop.mp3'} loop/>
                {[1,2,3,4].map((bar)=>(
                    <div key={bar} className={`cursor-pointer indicator-line ${isIndicatorActive?'active':''}`} style={{animationDelay:`${bar*0.1}s`}} />
                ))}
        </button>
       </div>
      </nav>
      </header>
    </div>
  )
}