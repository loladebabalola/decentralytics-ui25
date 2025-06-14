import React from 'react'

type GraphModelProps = {
    graphBg: string,
    graphModel: string
}

const GraphModel = ({graphBg, graphModel}: GraphModelProps) => {
  return (
   <div className="w-full h-auto overflow-x-scroll scrollbar-hide ">
        <div className="h-[336px] w-[1013.99px] bg-cover bg-center bg-no-repeat flex items-center" style={{
            backgroundImage: `url(${graphBg})`
        }}>
            <div className="w-[946.53px] h-[258px] mt-[50px] mb-[28px] ml-[67.47px] bg-contain bg-[bottom_bottom] bg-no-repeat" style={{
                backgroundImage: `url(${graphModel})`
            }}/>
        </div>
    </div>
  )
}

export default GraphModel