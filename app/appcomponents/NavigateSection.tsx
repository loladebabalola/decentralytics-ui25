import Image from "next/image";
import WidgetImg from "../../public/hero-second.png"

export const NavigateSection = () => {
    return (
        <div className="w-full flex justify-start items-center px-[16px]">
            <div className="relative w-full max-w-[467px] min-w-[323px]">
                <Image
                    src={WidgetImg}
                    alt="Navigation Widget"
                    width={467}
                    height={200}
                    priority
                    sizes="(max-width: 768px) 323px, 467px"
                    className="w-full h-auto object-contain"
                    style={{
                        maxHeight: '200px',
                        minHeight: '160px'
                    }}
                />
            </div>
        </div>
    )
}