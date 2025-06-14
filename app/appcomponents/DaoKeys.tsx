"use client"
import { useState } from "react";
import { plusJakarta } from "../utils/font";
import { Loader2 } from "lucide-react";

const DaoKeys = () => {
    const chains = ["All", "Ethereum", "Tron", "Solana","EOS","Polygon","Base","Avalanche","TON","Linea"];
    const [activeChain, setActiveChain] = useState<string>("All");
    const [loading, setLoading] = useState(false);

    const handleChainClick = (chain: string) => {
        if (chain !== activeChain) {
        setLoading(true);
        setTimeout(() => {
            setActiveChain(chain);
            setLoading(false);
        }, 600); // simulate 600ms fake loading
    }
      
    }

    console.log(activeChain);


  return (
   <div className="flex w-full gap-2 ">
        {loading && <div className="w-full h-full flex justify-center items-center">
            <Loader2 className="w-10 h-10 animate-spin" />
        </div>}
        {
            chains.map((chain, idx) => (
                <div 
                key={idx}
                className={`cursor-pointer rounded-[12px] text-[10px]/[15px] sm:text-[14px]/[20px] ${plusJakarta.variable} py-[11px] px-[12px] ${chain === activeChain ? `bg-[#1E80FF] text-white`:`bg-[#11171D] text-[#529DFF]`}`}
                onClick={()=> handleChainClick(chain)}
                >
                    {chain}
                </div>
            ))            
        }
   </div>
  )
}

export default DaoKeys;