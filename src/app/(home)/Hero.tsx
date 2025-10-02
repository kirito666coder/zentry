'use client'
import { useEffect, useRef, useState } from "react"
import Button from "@/components/Button"
import { TiLocationArrow } from "react-icons/ti"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {

  const [currentIndex, setcurrentIndex] = useState<number>(1)

  const [hasClicked, sethasClicked] = useState<boolean>(false)

  const [isLoading, setisLoading] = useState<boolean>(true)

  const [LoadedVideos, setLoadedVideos] = useState<number>(0)

  
  const totalVideos = 4;
  const nextVdRef = useRef<HTMLVideoElement |null>(null)

  const handleVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.log("Loaded:", e.currentTarget.src)
    setLoadedVideos((prev) => prev + 1)
  }

  const upcomingVideoIndex = (currentIndex%totalVideos)+1;

  const handleMiniVdClick = ()=>{
    sethasClicked(true)

    setcurrentIndex(upcomingVideoIndex)
  }

  useEffect(() => {
    console.log('hello',LoadedVideos,totalVideos)
    if(LoadedVideos >=  totalVideos-1){
      setisLoading(false)
    }
  }, [LoadedVideos])
  

  useGSAP(()=>{
   if(hasClicked){
    gsap.set('#next-video',{visibility:'visible'})

    gsap.to("#next-video",{
      transformOrigin:'center center',
      scale:1,
      width:'100%',
      height:'100%',
      duration:1,
      ease:'power1.inOut',
      onStart:()=>{nextVdRef.current?.play()},
    })
    gsap.from('#current-video', {
      transformOrigin:'current current',
      scale:0,
      duration:1.5,
      ease:'power1.inOut'
    })
   }
  },{dependencies:[currentIndex],revertOnUpdate:true})

  useGSAP(()=>{
    gsap.set('#video-frame',{
      clipPath:'polygon(15% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius:'0 0 40% 10%'
    })
    gsap.from('#video-frame',{
      clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius:' 0 0 0 0',
      ease:'power1.inOut',
      scrollTrigger:{
        trigger:'#video-frame',
        start:'center center',
        end:'bottom center',
        scrub:true,
      }
    })
  })

  const getVideoSrc = (index:number) => `videos/hero-${index}.mp4`

  const [delaysrc, setdelaysrc] = useState<number>(1)
  useEffect(() => {
    const timer = setTimeout(() => {
      setdelaysrc(
       currentIndex
      );
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);
  return (
    <div  className="relative h-dvh w-screen overflow-x-hidden">
      {/* {isLoading &&(
        <div className="flex-center fixed z-[0] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )} */}
      <div id="video-frame" className=" relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
              <video
              ref={nextVdRef}
              src={getVideoSrc(upcomingVideoIndex)}
              loop
              autoPlay
              muted
               preload="auto"
              id="current-video"
              className="size-64 origin-center scale-150 object-center object-cover"
              onLoadedData={(e) => handleVideoLoad(e)}
              onCanPlay={(e) => handleVideoLoad(e)}
              />
            </div>
          </div>
          <video
          ref={nextVdRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          autoPlay
           preload="auto"
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={(e) => handleVideoLoad(e)}
          onCanPlay={(e) => handleVideoLoad(e)}
          />
          <video
          src={getVideoSrc(delaysrc)}
          autoPlay 
          loop 
          muted
           preload="auto"
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={(e) => {handleVideoLoad(e)
            e.currentTarget.currentTime = 1.6; 
          }}
          onCanPlay={(e) => handleVideoLoad(e)}
          />
        </div>
         
         <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
         G<b>a</b>ming
         </h1>

         <div className="absolute left-0 top-0 z-40  size-full">
          <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font hero-heading text-blue-100">redefi<b>n</b>e</h1>
          <p className="mb-5 max-w-64 font-robert-regular text-blue-100">Enter the Metagame Layer <br/> Unleash the Play Economy</p>

          <Button id="watch-trailer" title="Watch Trailer" LeftIcon={<TiLocationArrow/>} className="!bg-yellow-300 flex-center gap-1"/>

          </div>
         </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 ">
         G<b>a</b>ming
         </h1>
    </div>
  )
}