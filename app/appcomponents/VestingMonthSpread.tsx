import { tableClass, unlockClass } from "./DetailPage/vesting/VestingScheduleSection"

const VestingMonthSpread = () => {
  return (
   <div className="w-[800px] h-auto lg:w-full mt-[32px]">
              <div className="w-full flex items-center justify-between">
                <p className={tableClass}>March 2023</p>
                <p className={tableClass}>March 2024</p>
                <p className={tableClass}>Aug 2024</p>
                <p className={tableClass}>March 2027</p>
              </div>
              <div className="w-full h-auto mt-[13px] flex flex-col gap-[32px]">

                <div className="h-[48px] w-full flex items-center justify-between border border-[#2B3640] rounded-[12px]">
                  <div className="h-full px-[11px] flex flex-col justify-center">
                    <p className={unlockClass}>Cliff</p>
                    <p className={unlockClass}>1 year</p>
                  </div>
                  <div className="w-[40%] bg-[#FEB752] rounded-[12px] h-full px-[12px] flex items-center justify-between">
                    <div className={unlockClass}>
                      <p>Linear unlock, 3 years</p>
                      <p> Unlock 25.4%, Dec 954.08M </p>
                    </div>
                    <p className={`${unlockClass} text-right`}>Lock 64.6%, ARD 1.74B </p>
                  </div>
                </div>

                <div className="h-[48px] w-full flex items-center justify-between border border-[#2B3640] rounded-[12px]">
                  <div className="h-full px-[11px] flex flex-col justify-center">
                    <p className={unlockClass}>Cliff</p>
                    <p className={unlockClass}>1 year</p>
                  </div>
                  <div className="w-[40%] bg-[#1E80FF] rounded-[12px] h-full px-[12px] flex items-center justify-between">
                    <div className={unlockClass}>
                      <p>Linear unlock, 3 years</p>
                      <p> Unlock 25.4%, Dec 954.08M </p>
                    </div>
                    <p className={`${unlockClass} text-right`}>Lock 64.6%, ARD 1.74B </p>
                  </div>
                </div>

                <div className="h-[48px] w-full flex items-center ">
                  <div className="w-[50%] bg-[#14C784] rounded-[12px] h-full px-[12px] flex items-center justify-between">
                    <div className={unlockClass}>
                      <p>Vested at TGE</p>
                      <p> Unlock 100%, Dec 1.16B </p>
                    </div>
                  </div>
                </div>

                <div className="h-[48px] w-full flex items-center ">
                  <div className="w-[35%] bg-[#14C784] rounded-[12px] h-full px-[12px] flex items-center justify-between">
                    <div className={unlockClass}>
                      <p>Vested at TGE</p>
                      <p> Unlock 100%, Dec 1.16B </p>
                    </div>
                  </div>
                </div>

                <div className="h-[48px] w-full bg-[#19212A] border border-[#2B3640] flex items-center rounded-[12px] px-[12px]">
                  <p className={unlockClass}>Data Unavailable. Token may be unlocked at any moment.</p>
                </div>
              </div>
            </div>
  )
}

export default VestingMonthSpread