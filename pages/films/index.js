import {BsSearch} from "react-icons/bs"
import Link from "next/link";

const Genre = ({ films }) => {


    return (
        <div className="max-w-[1280px] min-h-screen mx-auto">
            <div className="container h-full w-full">
                <div className="title text-white px-4 text-2xl flex items-center py-4 justify-between">
                    <div className="title"><h1>Daftar Film</h1></div>
                    <div className="search-bar border-2 border-red-500 border-solid rounded-full w-[400px] flex items-center px-4 py-2">
                        <input className="bg-transparent text-white focus:outline-none text-base w-full" placeholder="Cari Film Disini" type="text" />
                        <button><BsSearch/></button>
                    </div>
                </div>
                <div className="genre-container flex gap-2 p-4">
                    <div className="genre-card px-4 py-2 border-2 border-red-600 border-solid cursor-pointer rounded-full text-white">
                        <p>Action</p>
                    </div>
                    <div className="genre-card px-4 py-2 border-2 border-red-600 border-solid cursor-pointer rounded-full text-white">
                        <p>Adventure</p>
                    </div>
                    <div className="genre-card px-4 py-2 border-2 border-red-600 border-solid cursor-pointer rounded-full text-white">
                        <p>Comedy</p>
                    </div>
                    <div className="genre-card px-4 py-2 border-2 border-red-600 border-solid cursor-pointer rounded-full text-white">
                        <p>Fantasy</p>
                    </div>
                    <div className="genre-card px-4 py-2 border-2 border-red-600 border-solid cursor-pointer rounded-full text-white">
                        <p>Kids</p>
                    </div>
                    <div className="genre-card px-4 py-2 border-2 border-red-600 border-solid cursor-pointer rounded-full text-white">
                        <p>Drama</p>
                    </div>
                    <div className="genre-card px-4 py-2 border-2 border-red-600 border-solid cursor-pointer rounded-full text-white">
                        <p>Horror</p>
                    </div>
                    <div className="genre-card px-4 py-2 border-2 border-red-600 border-solid cursor-pointer rounded-full text-white">
                        <p>Cartoon</p>
                    </div>
                </div>
                    <div className="cards h-full w-full grid grid-cols-5 gap-4 pr-4 pl-4 pb-4">
                    {films.map((item, index) => {
                        const { title, rating, image, genre, id } = item
                        return (
                            <Link href={`/films/watching/${id}`} key={index}>
                            <div className="card  w-full h-full rounded-md overflow-hidden relative bg-cover bg-center group after:content-[''] after:absolute after:z-10 after:hover:bottom-0 after:-bottom-80 after:duration-200 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-[#121212] after:to-[#121212]/25 after:rounded-md cursor-pointer" >
                                <img src={`https://filmaxx-server.vercel.app/${image}`} alt="thumbnail" loading='lazy' />
                                <div className="kategori absolute right-0 top-0 text-xs px-2 py-1 bg-red-600 rounded-tr-md rounded-bl-md z-30 text-white">
                                    <h2>{genre[1]}</h2>
                                </div>
                                <div className="kategori absolute left-0 top-0 text-xs p-1 rounded-tr-md rounded-bl-md flex items-center z-30">
                                    <svg aria-hidden="true" className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Rating star</title>
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <p className="ml-1 text-xs text-white">{rating}</p>
                                </div>
                                <div className="title absolute text-white -bottom-20 group-hover:bottom-2 duration-200 w-full flex justify-center">
                                    <h1 className="z-50 text-xs text-center p-1 text-ellipsis">{title}</h1>
                                </div>
                            </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Genre;

export const getStaticProps = async () => {
    const resp = await fetch(`https://filmaxx-server.vercel.app/films/`, {
        headers:{
            'Content-Type':'application/json'
        }
    });
    const films = await resp.json();
  
    return {
      props: {
        films,
      },
    };
  };
