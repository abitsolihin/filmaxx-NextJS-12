import { useState, useEffect } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import ReactPaginate from 'react-paginate'
import {useRouter} from 'next/router'

const Genre = ({ films }) => {
    const [listFilms, setListFilms] = useState(films)
    const [pageCount, setPageCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const getFilms = async () => {
            const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/films?page=1&limit=6`)
            const films = await resp.json()
            setPageCount(films.count / 6)
            setListFilms(films)
            setLoading(false)
        }
        getFilms()
    },[])


    const fetchFilms = async (currentPage) => {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/films?page=${currentPage}&limit=6`);
        const films = await resp.json()
        return films;
    }


    const handlePageClick = async (data) => {
        console.log(data.selected)
        let currentPage = data.selected + 1;
        let p = currentPage >= 1 ? currentPage : 1;
        router.replace(`?page=${p}&limit=6`)
        const filmsFromServer = await fetchFilms(currentPage)
        setListFilms(filmsFromServer)
    };


    return (
        <div className="max-w-[1980px] h-screen">
    
            <div className="container h-full w-full">
                <div className="title text-white px-4 text-2xl flex items-center py-2"><h1>Daftar Film</h1></div>
                {loading ? <div id="wrapper flex items-center justify-center">
                    <div className="profile-main-loader">
                        <div className="loader">
                            <svg className="circular-loader" viewBox="25 25 50 50" >
                                <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#dc2626" stroke-width="2" />
                            </svg>
                        </div>
                    </div>

                </div> : <div className="cards h-full w-full grid grid-cols-2 grid-rows-3 gap-4 pr-4 pl-4 pb-4">
                    {listFilms.rows.map((item, index) => {
                        const { name, rating, url, genre } = item
                        return (
                            <div className="card  w-full h-full rounded-md overflow-hidden relative   md:w-[130px] 2xl:h-[200px] 2xl:w-[150px] bg-cover bg-center group after:content-[''] after:absolute after:z-10 after:hover:bottom-0 after:-bottom-80 after:duration-200 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-[#121212] after:to-[#121212]/25 after:rounded-md cursor-pointer" key={index}>
                                <img src={url} alt="thumbnail" loading='lazy' />
                                <div className="kategori absolute right-0 top-0 text-xs px-2 py-1 bg-red-600 rounded-tr-md rounded-bl-md z-30 text-white">
                                    <h2>{genre}</h2>
                                </div>
                                <div className="kategori absolute left-0 top-0 text-xs p-1 rounded-tr-md rounded-bl-md flex items-center z-30">
                                    <svg aria-hidden="true" className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Rating star</title>
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <p className="ml-1 text-xs text-white">{rating}</p>
                                </div>
                                <div className="title absolute text-white -bottom-20 group-hover:bottom-2 duration-200 w-full flex justify-center">
                                    <h1 className="z-50 text-xs text-center p-1 text-ellipsis">{name}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>}
                <div className="next-prev-button w-full fixed bottom-6 flex justify-center z-50 text-white px-4">
                    <div className="wrapper flex items-center justify-center gap-4 bg-slate-800 p-2 rounded-3xl">
                        <ReactPaginate className='flex gap-2 items-center text-xs'
                            previousLabel={<BsFillArrowLeftCircleFill size={24} color="red" />}
                            nextLabel={<BsFillArrowRightCircleFill size={24} color="red" />}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            activeClassName={'active text-red-600'}
                            onPageChange={handlePageClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Genre;

// export const getStaticPaths = async () => {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/films`);
//     const data = await response.json();

//     const paths = data.rows.map((item) => ({
//         params: {
//             currentPage: `${item.id}`,
//         },
//     }));
//     return {
//         paths,
//         fallback: false,
//     };
// }

export const getStaticProps = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/films`)
    const data = await response.json()
    // const page = (response.count / 6)
    return {
        props: {
            films: data,
            // page,
        }
    }
}
