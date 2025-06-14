import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { plusJakarta } from "../utils/font"


const FilterBar = () => {
  return (
    <div>
      <Button asChild className={`bg-[#11171D] text-white text-[14px]/[20px] font-medium ${plusJakarta}`}>
        <Link href="/">
          <Image src="/filter-icon.svg" width={12} height={10} alt="filter icon" />
          Filters
        </Link>
      </Button>
    </div>
  )
}

export default FilterBar