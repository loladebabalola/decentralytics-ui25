import React from 'react'

type ComponentContainerProps = {
  children: React.ReactNode,
  pad?:string, 
  hx?:string,
  bg?:string,
  pdy?:string,
  pdx?:string,
  direction?: "vertical" | "horizontal",
  gap?: number,
  otherClasses?: string
}

const ComponentContainer = ({
  children, pad,pdy,
  pdx, hx, bg, 
  direction, gap,
  otherClasses
}: ComponentContainerProps) => {
  return (
    <div 
     className={`rounded-[12px] w-full gap-0
      ${hx ? hx : `h-auto`} 
      ${bg ? bg : `bg-[#11171D]` } 
      ${direction === "vertical" ? `flex flex-col gap-[${gap}px]` : `flex flex-row  gap-[${gap}px]`}
      ${pad ? `p-[${pad}]`: pdx && pdy ? `px-[${pdx}] py-[${pdy}]` : `p-[24px]`}
      ${otherClasses ? otherClasses : ``}
    `}
    >
      {children}
    </div>
  )
}

export default ComponentContainer