
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState, useEffect } from 'react';
import Link from 'next/link'

export default function Recomended() {
    const [films, setFilm] = useState([])

    useEffect(() => {
        const getFilms = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/films`
            )
            const data = await response.json()
            setFilm(data)
        }
        getFilms()
    }, [])
    return (
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
                        arrows: false,
                    },
                    480: {
                        perPage: 3,
                        arrows: false,
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
        
    )
}