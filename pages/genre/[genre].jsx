import Link from 'next/link'
import Image from 'next/image'

const genre = () => {
    return (
        <>
            {/* Navbar */}

            <nav className='w-full h-[60px] flex bg-[#121212]/50 backdrop-blur-xl shadow-md z-50 fixed'>
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
                        <Link href="/"><a className="px-4 py-5 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Daftar Film</a></Link>
                        <Link href="/"><a className="px-4 py-5 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Kartun</a></Link>
                        <Link href="/"><a className="px-4 py-5 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Action</a></Link>
                    </div>
                    <div className="button w-[20%] lg:w-[15%] text-white flex items-center justify-center">
                        <Link href='/'><a className="hover:bg-red-600 border-2 border-solid border-red-600 duration-200 px-5 text-sm py-2 rounded" >Sign In</a></Link>
                    </div>
                </div>
            </nav>

            {/* Body */}
            <div className="text-white min-h-screen max-w-screen bg-kungfu bg-cover relative after:[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-10 after:bg-gradient-to-t after:from-[#121212] after:to-[#121212]/50">
                <div className="film-wrapper absolute bottom-32 left-8 right-8 h-[60%] bg-gray-500/5 backdrop-blur-lg z-20 rounded-2xl">
                    <div className="title-button-wrapper h-[60%] flex">
                        <div className="title-rating-wrapper w-3/6">
                            <div className="title-wrapper p-2 text-xl font-bold w-full flex h-[40%]">
                                <h1 className='h-full w-full text-ellipsis overflow-hidden text-start'>KungFu Panda awokdoasodkaoskd</h1>
                            </div>
                            <div className="content-wrapper h-[60%]">
                                <div className="rating-kategori-wrapper flex items-center">
                                    <div className="rating flex items-center px-2 w-3/6">
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <p class="ml-1 text-sm text-white">5</p>
                                    </div>
                                    <div className="kategori w-3/6">
                                        <h1 className='text-center text-sm'>Kartun</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="img-wrapper w-3/6 p-6 pt-4 flex items-center">
                            <Image className="rounded-md"
                                src='/thumbnail2.webp'
                                alt="Thumbnail"
                                width="300px"
                                height="400px"
                            />
                        </div>
                    </div>
                    <div className="episode-wrapper h-[40%]">
                        <div className="episode-wrapper h-full w-full ">
                            <div className="episode-title p-2">
                                <h1 className='text-sm'>Episode:</h1>
                            </div>
                            <div className="link-stream grid grid-cols-4 grid-rows-3 p-2 gap-1">
                                <Link href="/genre/genre"><a className='text-xs p-1 border-white border-[1px] border-solid rounded text-center'>1</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default genre