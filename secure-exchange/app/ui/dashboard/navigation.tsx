import Link from "next/link"
import SecureLogo from "../secure-logo"
import NavLinks from "./nav-links"
import { PowerIcon } from "@heroicons/react/16/solid"

export default function HomeNav(){
    return (
        <div className="flex h-28 flex-row justify-between items-center px-3 py-4 md:px-2 
        md:flex-row md:items-center md:justify-between md:h-20">
            <Link className="mb-2 flex h-20 w-32 items-end justify-start rounded-md md:p-4 md:h-40 " 
            href="/">
            <div className="md:w-40 ">
                <SecureLogo/>
            </div>
            </Link>
        <div className='flex grow justify-between 
        space-x-2 md:flex-row md:space-x-0 md:space-y-2 
        text-black md:justify-between mt-10'>
        <NavLinks/>
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block "></div> */}
          <button className="flex h-[48px] md:w-32 items-center justify-center gap-2 w-10 rounded-md 
          bg-gray-50 p-3 text-sm font-medium hover:bg-red-500
          hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </div>
        </div>
    )
}