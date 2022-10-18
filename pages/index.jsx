import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link'
import harry from '../public/thumbnail.webp'
import Image from 'next/image'

import '@splidejs/react-splide/css';

const index = () => {

  return (
    <div className="w-screen h-screen bg-[#121212]">
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
            <Link href="/"><a className="px-4 py-5 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Daftar Film</a></Link>
            <Link href="/"><a className="px-4 py-5 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Kartun</a></Link>
            <Link href="/"><a className="px-4 py-5 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Action</a></Link>
          </div>
          <div className="button w-[20%] lg:w-[15%] text-white flex items-center justify-center">
            <Link href='/'><a className="hover:bg-red-600 border-2 border-solid border-red-600 duration-200 px-5 text-sm py-2 rounded" >Sign In</a></Link>
          </div>
        </div>
      </nav>
      <div className="section h-full w-full">
        <div className="background-container relative w-full h-[70%] after:content-[''] after:absolute after:z-10 after:top-0 after:left-0 after:w-[60%] after:h-full after:bg-gradient-to-r after:from-[#121212] after:to-transparent before:content-[''] before:absolute before:z-10 before:top-0 before:right-0 before:w-[60%] before:h-full before:bg-gradient-to-l before:from-[#121212] before:to-transparent">
          <div className="card-container absolute h-full w-full top-0 z-20 flex items-center justify-center text-white">
            <Splide className="absolute h-full w-full top-0 z-20 flex items-center text-white" options={{
              type: 'loop',
              autoplay: 'true',
              padding: '2rem',
              gap: '5px',
              focus: 'center',
              pagination: false,
            }}>
              <SplideSlide className="card duration-200 w-full h-[50%] bg-white/[0.15] rounded-xl backdrop-blur-md flex items-center">
                <div className="article w-[60%] h-full p-2">
                  <div className="title h-[20%] w-full flex items-center text-2xl p-2">
                    <h1>Harry Potter</h1>
                  </div>
                  <div className="description h-[50%] w-full text-xs flex items-center font-light p-2">
                    <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, accusantium quam veniam quibusdam libero ullam aliquam explicabo consequuntur quos. Dolorum.</p>
                  </div>
                  <div className="rating-button h-[30%] w-full flex items-center p-2">
                    <Link href="/"><a className="px-5 py-2 bg-red-600 text-xs rounded">Nonton</a></Link>
                  </div>
                </div>
                <div className="img-wrapper w-[40%] h-full flex jutify-center items-center pr-4">
                  <Image className="rounded-xl"
                    src={harry}
                    alt="Picture of the author"
                    width="150px"
                    height="200px"
                  />
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
        <div className="section h-[30%] text-white ">
          <div className="title-wrapper flex p-4">
            <div className="title w-3/6 text-xl">Rekomendasi</div>
            <div className="genre w-3/6 flex justify-end gap-2 text-xs items-center">
              <Link href=""><a>Action</a></Link>
              <Link href=""><a>Movie</a></Link>
              <Link href=""><a>Kartun</a></Link>
            </div>
          </div>
          <div className="cards h-[70%] relative w-full flex justify-center px-4">
            <Splide options={{
              type: 'loop',
              perPage: 3,
              perMove: 1,
              gap: '10px',
              pagination: false,
            }} className="absolute top-0 h-full w-full flex justify-center">
              <SplideSlide className="card h-full">
                <div className="img-wrapper overflow-hidden relative h-[120px] w-[140px] bg-harry bg-cover bg-center rounded-md group after:content-[''] after:absolute after:z-10 after:hover:bottom-0 after:-bottom-10 after:duration-200 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-[#121212] after:to-transparent after:rounded-md" >
                  <div className="kategori absolute right-0 top-0 text-xs px-2 py-1 bg-red-600 rounded-tr-md rounded-bl-md">
                    <h2>Movie</h2>
                  </div>
                  <div className="title absolute group-hover:bottom-0 -bottom-10 duration-200 w-full flex justify-center
                  ">
                    <h1 className="z-50 text-xs text-ellipsis">Harry Potter</h1>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index