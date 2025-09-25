import { ReactNode } from "react"

type Props = {
    id:string,
    title:string,
    LeftIcon?:ReactNode,
    RightIcon?:ReactNode,
    className:string,
}

export default function Button({id,title,LeftIcon,RightIcon,className}: Props) {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${className}`}>
        {LeftIcon}
        <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        {title}
        </span>
    </button>
  )
}