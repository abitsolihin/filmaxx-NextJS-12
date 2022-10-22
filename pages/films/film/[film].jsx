import Link from 'next/link'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const film = () => {
    const [title, setTitle] = useState("")
    const [sinopsis, setSinopsis] = useState("")
    const [kategori, setKategori] = useState("")
    const [image, setImage] = useState("")
    const [streamUrl, setStreamURL] = useState("")
    const [background, setBackground] = useState("")
    const router = useRouter()
    const { endpoint } = router.query;

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/films/film/${endpoint}`)
            .then((res) => {
                setTitle(res.data.name)
                setImage(res.data.url)
                setSinopsis(res.data.sinopsis)
                setKategori(res.data.genre)
                setStreamURL(res.data.stream_url)
                setBackground(res.data.background_url)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [endpoint])
    return (
        <>
            <Head>
                <title>Filmaxx | Nonton Film Tanpa Iklan</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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
            <div style={{ backgroundImage: `url(${background})` }} className="text-white min-h-screen max-w-screen bg-cover bg-no-repeat relative after:[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-10 after:bg-gradient-to-t after:from-[#121212] after:to-[#121212]/10">
                <Link href="/">
                    <a className="nonton-sekarang hidden md:flex text-white absolute left-10 bottom-[39%] lg:bottom-[57%] z-20 flex items-center gap-2 h-[50px]">
                        <h1 className="text-xl font-light">Nonton Sekarang</h1>
                        <img className='w-[24px] h-[24px] mt-[5px]' src="/play.png" alt="play" />
                    </a>
                </Link>
                {/* Ukuran HP */}
                <div className="film-wrapper absolute bottom-32 md:hidden block md:bottom-8 left-8 right-8 h-[60%] md:h-[40%] bg-gray-500/5 backdrop-blur-lg z-20 rounded-2xl">
                    <div className="title-button-wrapper h-[60%] flex">
                        <div className="title-rating-wrapper w-3/6">
                            <div className="p-2 text-xl md:text-3xl font-bold w-full flex h-[40%] items-center">
                                <h1 className=' w-full truncate text-start'>{title}</h1>
                            </div>
                            <div className="content-wrapper h-[60%]">
                                <div className="rating-kategori-wrapper h-[20%] md:h-[30%] flex items-center">
                                    <div className="rating flex items-center px-2 w-3/6">
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <p className="ml-1 text-sm text-white">5</p>
                                    </div>
                                    <div className="kategori w-3/6">
                                        <h1 className='text-center text-base hidden md:block'>Kategori :</h1>
                                        <h2 className='text-center text-sm'>{kategori}</h2>
                                    </div>
                                </div>
                                <div className="descriptio h-[80%] md:h-[70%] w-fulll">
                                    <p className='h-[105px] w-full text-xs p-2 overflow-ellipsis overflow-y-hidden'>{sinopsis}</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-wrapper w-3/6 p-6 pt-4 flex items-center md:justify-center">
                            <img className="rounded-md md:w-[150px]"
                                src={image}
                                alt="Thumbnail"
                            />
                        </div>
                    </div>
                    <div className="episode-wrapper h-[40%]">
                        <div className="episode-wrapper h-full w-full ">
                            <div className="episode-title p-2">
                                <h1 className='text-sm'>Episode:</h1>
                            </div>
                            <div className="link-stream grid grid-cols-4 grid-rows-3 p-2 gap-1 md:gap-4">
                                <Link href="/"><a className='text-xs p-1 border-white border-[1px] border-solid rounded text-center'>1</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ukuran Tablet */}
                <div className="film-wrapper absolute hidden md:flex p-4 bottom-8 left-8 right-8 h-[35%] lg:h-[50%] bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 z-20 rounded-2xl">
                    <div className="content-wrapper h-full w-[70%] lg:w-[80%]">
                        <div className="title h-[20%] w-full flex  uppercase">
                            <div className="rating-judul h-full w-[40%] lg:w-[60%] flex flex-col justify-center">
                                <div className="rating flex">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <p className="ml-1 text-sm text-white">5</p>
                                </div>
                                <div className="judul">
                                    <h1 className='text-white text-2xl truncate'>
                                        {title}
                                    </h1>
                                </div>
                            </div>
                            <div className="right-wrapper flex gap-4 w-full h-full px-4 lg:px-8 items-center">
                                <div className="durasi w-[35%] lg:w-[33.3%] flex flex-col justify-center items-center lg:items-start">
                                    <h1 className=' text-xs font-light  lg:text-sm'>Durasi Film</h1>
                                    <p className=' text-sm tracking-wider lg:text-base'>1 j 32 m</p>
                                </div>
                                <div className="durasi w-[40%] lg:w-[33.3%] flex flex-col justify-center items-center lg:items-start">
                                    <h1 className=' text-xs font-light lg:text-sm'>Tanggal Rilis</h1>
                                    <p className=' tracking-wider text-sm lg:text-base'> 13 Juni 2008 </p>
                                </div>
                                <div className="durasi w-[25%] lg:w-[33.3%] flex flex-col justify-center items-center lg:items-start">
                                    <h1 className=' text-xs font-light lg:text-sm'>Kategori</h1>
                                    <p className=' text-sm tracking-wider lg:text-base'> {kategori}</p>
                                </div>
                            </div>
                        </div>
                        <div className="deskripsi h-[60%] w-full">
                            <h1 className='w-full font-light lg:text-lg'>Sinopsis</h1>
                            <p className='h-[188px] w-[516px] lg:w-[850px] tracking-wide lg:text-lg lg:font-light'>
                                {sinopsis}
                            </p>
                        </div>
                        <div className="episode h-[20%] w-full flex flex-col gap-2">
                            <h1 className='font-light'>Episode</h1>
                            <div className="episode-list flex gap-4">
                                <Link href={streamUrl}><a className='px-2 py-1 border-[1px] border-solid border-white rounded-lg'>E1</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="img-wrapper w-[30%] lg:w-[20%] p-6 pt-4 flex items-center justify-center md:justify-center">
                        <img className="rounded-xl md:w-[100%] lg:w-[200px]"
                            src={image}
                            alt="Thumbnail" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default film