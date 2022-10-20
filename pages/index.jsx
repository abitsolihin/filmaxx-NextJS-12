import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'

import '@splidejs/react-splide/css';

export default function Index() {
  const [films, setFilm] = useState([])

  useEffect(() => {
    const getFilms = async () => {
      const response = await fetch("https://filmaxxapi.herokuapp.com/api/films")
      const data = await response.json()
      console.log(data)
      setFilm(data)
    }
    getFilms()
  }, [])
  return (
    <>
      <nav className='w-full h-[60px] flex bg-[#121212]/25 backdrop-blur-xl shadow-md z-50 fixed'>
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
      <div className="container max-w-[100vw] min-h-[100%]">
        <div className="section h-[70vh] w-full">
          <div className="background-container w-full h-full relative">
            <video autoPlay muted loop className="object-cover absolute w-full h-full">
              <source src="trailer.mp4" type="video/mp4" />
            </video>
            <Splide options={{
              type: 'loop',
              padding: '3rem',
              pagination: false,
              autoplay: true,
              perPage: 1,
              start: 10,
              perMove: 1,
              gap: '10px',
              speed: 1000,
              breakpoints: {
                2560: {
                  perPage: 3,
                  padding: '5rem',
                  gap: '30px',
                  type: 'loop',
                  pagination: true,
                },
                1920: {
                  perPage: 2,
                  padding: '5rem',
                  gap: '30px',
                  type: 'loop',
                  pagination: true,
                },
                1028: {
                  perPage: 1,
                  padding: '15rem',
                  gap: '15px',
                  type: 'loop',
                  pagination: true,
                },
                820: {
                  perPage: 1,
                  padding: '8rem',
                  type: 'loop',
                  gap: '10px',
                  pagination: false,
                },
                480: {
                  perPage: 1,
                  padding: '3rem',
                  type: 'loop',
                  gap: '10px',
                  pagination: false,
                },
              },
            }} className="card-container absolute h-full w-full top-0 z-30 flex items-center p-0 justify-center text-white">
              {films.map((item) => (
                <SplideSlide className="card duration-200 w-full h-[70%] md:h-[300px] 2xl:h-[400px] bg-gray-600/25 rounded-xl backdrop-blur-xl flex items-center justify-center" key={item.id}>
                  <div className="article w-[60%] h-full p-2">
                    <div className="title md:h-[30%] h-[50px] truncate w-full flex items-center text-xl md:text-3xl ">
                      <h1 className='p-2'>{item.name}</h1>
                    </div>
                    <div className="description h-[90px] md:h-[120px] 2xl:h-[50%] overflow-ellipsis w-full text-xs 2xl:text-base md:text-sm flex items-center md:items-start font-light p-2">
                      <p className="h-[80px] md:h-[120px] 2xl:h-full overflow-ellipsis overflow-y-hidden">{item.sinopsis}</p>
                    </div>
                    <div className="rating-button h-[25%] 2xl:h-[20%] w-full flex items-center p-2">
                      <div className="rating w-[50%] hidden md:flex items-center">
                        <div class="flex items-center justify-center text-white">
                          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <p class="ml-1 text-sm text-white">{item.rating} / 5</p>
                        </div>
                      </div>
                      <div className="button w-full md:w-[50%] flex md:justify-end items-center">
                        <Link href="/"><a className="px-5 py-2 bg-red-600 text-xs rounded">Nonton</a></Link>
                      </div>
                    </div>
                  </div>
                  <div className="img-wrapper w-[40%] h-full flex justify-center p-4">
                    <Image className="rounded-xl w-[300px] h-[400px]"
                      src={item.url}
                      alt="Thumbnail"
                      width="300px"
                      height="400px"
                    />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="section h-[40vh] text-white ">
            <div className="title-wrapper flex p-4">
              <div className="title w-3/6 text-xl md:text-2xl lg:text-3xl">Rekomendasi</div>
              <div className="genre w-3/6 flex justify-end gap-2 xl:gap-8 text-xs 2xl:text-xl items-center">
                <Link href=""><a className="text-xs xl:text-base py-1 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Action</a></Link>
                <Link href=""><a className="text-xs xl:text-base py-1 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Movie</a></Link>
                <Link href=""><a className="text-xs xl:text-base py-1 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Kartun</a></Link>
              </div>
            </div>
            <div className="cards h-[70%] relative w-full flex justify-center">
              <Splide options={{
                type: 'loop',
                perPage: 3,
                perMove: 1,
                gap: '10px',
                speed: 1000,
                pagination: false,
                breakpoints: {
                  2560: {
                    perPage: 12,
                    gap: '1px',
                  },
                  1920: {
                    perPage: 9,
                    gap: '10px',
                  },
                  1024: {
                    perPage: 7,
                    gap: '1px',
                  },
                  820: {
                    perPage: 5,
                  },
                  480: {
                    perPage: 3,
                  },
                },
              }} className="absolute top-0 h-full w-full flex justify-center">
                {films.map((film) => {
                  const { id, name, genre, url, rating } = film
                  return (
                    <Link href="/" key={id}>
                      <SplideSlide className="card h-full">
                        <div style={{ backgroundImage: `url(${url})` }} className="img-wrapper overflow-hidden relative h-[150px] w-[100px] md:h-[180px] md:w-[130px] 2xl:h-[200px] 2xl:w-[150px] bg-cover bg-center rounded-md group after:content-[''] after:absolute after:z-10 after:hover:bottom-0 after:-bottom-80 after:duration-200 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-[#121212] after:to-[#121212]/25 after:rounded-md cursor-pointer"
                        >
                          <div className="kategori absolute right-0 top-0 text-xs px-2 py-1 bg-red-600 rounded-tr-md rounded-bl-md z-30">
                            <h2>{genre}</h2>
                          </div>
                          <div className="kategori absolute left-0 top-0 text-xs p-1 rounded-tr-md rounded-bl-md flex items-center z-30">
                            <svg aria-hidden="true" class="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <p class="ml-1 text-xs text-white">{rating}</p>
                          </div>
                          <div className="title absolute group-hover:bottom-2 -bottom-20 duration-200 w-full flex justify-center
                  ">
                            <h1 className="z-50 text-xs text-center p-1 text-ellipsis">{name}</h1>
                          </div>
                        </div>
                      </SplideSlide>
                    </Link>
                  )
                })}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}