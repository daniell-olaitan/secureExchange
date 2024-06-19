import { LockClosedIcon } from "@heroicons/react/16/solid";
import { lusitana } from "@/app/ui/fonts";

export default function SecureLogo(){
    return(
        <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
            <LockClosedIcon className="md:h-20 md:w-20 rotate-[15deg]"/>
            <p className="text-[24px]">Secure Exchange</p>
        </div>
    );
}
