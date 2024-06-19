import '@/app/ui/global.css'
import HomeNav from '../ui/dashboard/navigation'

export default function Layout({
    children,
}:
{
    children: React.ReactNode;
}){
    return(
        <div className='flex h-screen flex-col md:flex-col md:overflow-hidden text-black-400'>
            <div className='flex-none bg-white md:w-100 md:h-32'>
                <HomeNav/>
            </div>
            <div className='flex-grow p-6 md:overflow-y-auto md:p-12 bg-gray-500'>{children}</div>
        </div>
    )
}