import Link from 'next/link'

export default function Navbar () {
    return (
        <nav className='w-full h-[60px] flex bg-[#121212]/75 fixed shadow-md z-50'>
            <div className="logo p-4 w-[40%]">
                <h1 className='text-red-500 text-xl font-bold'>FILMAXX</h1>
            </div>
            <div className="hamburger sm:hidden h-full w-full justify-center items-end gap-[5px] flex flex-col pr-8">
                <span className='h-[3px] w-[30px] bg-white'></span>
                <span className='h-[3px] w-[35px] bg-white'></span>
                <span className='h-[3px] w-[40px] bg-white'></span>
            </div>
            <div className="right hidden sm:flex w-full">
                <div className="navlist w-[80%] lg:w-[85%] text-white flex items-center justify-end text-sm">
                    <Link  href="/"><a className="px-4 py-5 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Daftar Film</a></Link>
                    <Link  href="/"><a className="px-4 py-5 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Kartun</a></Link>
                    <Link  href="/"><a className="px-4 py-5 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Action</a></Link>
                </div> 
                <div className="button w-[20%] lg:w-[15%] text-white flex items-center justify-center">
                    <Link href='/'><a className="hover:bg-red-600 border-2 border-solid border-red-600 duration-200 px-5 text-sm py-2 rounded" >Sign In</a></Link>
                </div>
            </div>
        </nav>
    )
}