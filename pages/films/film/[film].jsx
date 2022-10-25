import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BsBoxArrowLeft } from 'react-icons/bs';


const Film = () => {
  const [title, setTitle] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const [kategori, setKategori] = useState('');
  const [image, setImage] = useState('');
  const [streamUrl, setStreamURL] = useState('');
  const [background, setBackground] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { film } = router.query;

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/films/film/${film}`)
      .then((res) => {
        setTitle(res.data.name)
        setImage(res.data.url);
        setSinopsis(res.data.sinopsis);
        setKategori(res.data.genre);
        setStreamURL(res.data.stream_url);
        setBackground(res.data.background_url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [film]);
  return (
    <>
      <Head>
        <title>Filmaxx | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center gap-4 z-50">
          <div className="circle w-[50px] h-[50px] rounded-full border-r-4 border-b-4 border-l-4 border-t-4 animate-spin animate-bounce border-red-600 border-solid z-40 text-white">
            <svg class="circular-loader" viewBox="25 25 50 50">
              <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#dc2626" stroke-width="3" />
            </svg>
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="text-white min-h-screen max-w-screen bg-cover bg-no-repeat relative after:[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-10 after:bg-gradient-to-t after:from-[#121212] after:to-[#121212]/10"
          >
            <div className="backbutton cursor-pointer text-white z-50 absolute left-8 top-2 flex gap-2 items-center " onClick={() => router.back()}>
              <BsBoxArrowLeft/>
              <p>Kembali</p>
            </div>
          <Link href={`/films/watching/${title}`}>
            <a className="nonton-sekarang hidden cursor-pointer md:flex text-white absolute left-10 bottom-[43%] lg:bottom-[60%] z-20 items-center gap-2 h-[50px]">
              <h1 className="text-xl font-light">Nonton Sekarang</h1>
              <img className="w-[24px] h-[24px] mt-[5px]" src="/play.png" alt="play" />
            </a>
          </Link>
          {/* Ukuran HP */}
          <div className="film-wrapper absolute bottom-32 md:hidden block md:bottom-8 left-8 right-8 h-[60%] md:h-[40%] bg-gray-500/5 backdrop-blur-lg z-20 rounded-2xl">
            <div className="title-button-wrapper h-[60%] flex">
              <div className="title-rating-wrapper w-3/6">
                <div className="p-2 text-xl md:text-3xl font-bold w-full flex h-[40%] items-center">
                  <h1 className=" w-full truncate text-start">{title}</h1>
                </div>
                <div className="content-wrapper h-[60%]">
                  <div className="rating-kategori-wrapper h-[20%] md:h-[30%] flex items-center">
                    <div className="rating flex items-center px-2 w-3/6">
                      <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <p className="ml-1 text-sm text-white">5</p>
                    </div>
                    <div className="kategori w-3/6">
                      <h1 className="text-center text-base hidden md:block">Kategori :</h1>
                      <h2 className="text-center text-sm">{kategori}</h2>
                    </div>
                  </div>
                  <div className="descriptio h-[80%] md:h-[70%] w-fulll">
                    <p className="h-[105px] w-full text-xs p-2 overflow-ellipsis overflow-y-hidden">{sinopsis}</p>
                  </div>
                </div>
              </div>
              <div className="img-wrapper w-3/6 p-6 pt-4 flex items-center md:justify-center">
                <img className="rounded-md md:w-[150px]" src={image} alt="Thumbnail" />
              </div>
            </div>
            <div className="episode-wrapper h-[40%]">
              <div className="episode-wrapper h-full w-full ">
                <div className="episode-title p-2">
                  <h1 className="text-sm">Episode:</h1>
                </div>
                <div className="link-stream grid grid-cols-4 grid-rows-3 p-2 gap-1 md:gap-4">
                  <Link href="/">
                    <a className="text-xs p-1 cursor-pointer border-white border-[1px] border-solid rounded text-center">1</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ukuran Tablet */}
          <div className="film-wrapper absolute hidden md:flex p-8 bottom-8 left-8 right-8 h-[35%] lg:h-[55%] bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 z-20 rounded-2xl">
            <div className="content-wrapper h-full w-[70%] lg:w-[80%]">
              <div className="title h-[20%] w-full flex  uppercase">
                <div className="rating-judul h-full w-[40%] lg:w-[60%] flex flex-col justify-center">
                  <div className="rating flex">
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <title>Rating star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <p className="ml-1 text-sm text-white">5</p>
                  </div>
                  <div className="judul">
                    <h1 className="text-white text-2xl truncate">{title}</h1>
                  </div>
                </div>
                <div className="right-wrapper flex gap-4 w-full h-full px-4 lg:px-8 items-center">
                  <div className="durasi w-[35%] lg:w-[33.3%] flex flex-col justify-center items-center lg:items-start">
                    <h1 className=" text-xs font-light  lg:text-sm">Durasi Film</h1>
                    <p className=" text-sm tracking-wider lg:text-base">1 j 32 m</p>
                  </div>
                  <div className="durasi w-[40%] lg:w-[33.3%] flex flex-col justify-center items-center lg:items-start">
                    <h1 className=" text-xs font-light lg:text-sm">Tanggal Rilis</h1>
                    <p className=" tracking-wider text-sm lg:text-base"> 13 Juni 2008 </p>
                  </div>
                  <div className="durasi w-[25%] lg:w-[33.3%] flex flex-col justify-center items-center lg:items-start">
                    <h1 className=" text-xs font-light lg:text-sm">Kategori</h1>
                    <p className=" text-sm tracking-wider lg:text-base"> {kategori}</p>
                  </div>
                </div>
              </div>
              <div className="deskripsi h-[60%] w-full">
                <h1 className="w-full font-light lg:text-lg">Sinopsis</h1>
                <p className="h-[188px] w-[516px] lg:w-[850px] tracking-wide lg:text-lg lg:font-light">{sinopsis}</p>
              </div>
              <div className="episode h-[20%] w-full flex flex-col gap-2">
                <h1 className="font-light">Episode</h1>
                <div className="episode-list flex gap-4">
                  <Link href={`/films/watching/${title}`}>
                    <a className="px-2 py-1 cursor-pointer border-[1px] border-solid border-white rounded-lg">E1</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="img-wrapper w-[30%] lg:w-[20%] p-6 pt-4 flex items-center justify-center md:justify-center">
              <img className="rounded-xl md:w-[100%] lg:w-[200px]" src={image} alt="Thumbnail" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Film;
