
type TreasuryInfoProps = {
  treasury_value?: string
}
const TreasuryInfo = ({treasury_value}:TreasuryInfoProps) => {
  return (
    <div className="px-[16px] py-[24px]">
      <h3 className="font-semibold text-[14px]/[20px] text-white">Total Treasury</h3>
      <h1 className="text-[26px]/[37px] font-bold text-white">{treasury_value? treasury_value :`$34.9B` }</h1>
      <div className="space-y-2 w-full">
        <span className="flex items-center justify-between">
          <p className="text-[#84919F] text-[12px]/[18px] font-medium">Liquid</p>
          <p className="font-semibold text-[12px]/[18px] text-white">$33.2B</p>
        </span>
        <span className="flex items-center justify-between">
          <p className="text-[#84919F] text-[12px]/[18px] font-medium">Vesting</p>
          <p className="font-semibold text-[12px]/[18px] text-white">$1.7B</p>
        </span>
      </div>
    </div>
  )
}

export default TreasuryInfo; 