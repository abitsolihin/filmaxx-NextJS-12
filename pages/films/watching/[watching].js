import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const watching = () => {
  const [stream, setStream] = useState('');
  const [title, setTitle] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const [kategori, setKategori] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();
  const { watching } = router.query;

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/films/film/${watching}`)
      .then((res) => {
        setStream(res.data.stream_url);
        setTitle(res.data.name)
        setImage(res.data.url);
        setSinopsis(res.data.sinopsis);
        setKategori(res.data.genre);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [watching]);
  return (
    <>
       <nav className="w-full h-[60px] flex bg-[#121212]/50 backdrop-blur-xl shadow-md z-50">
        <div className="logo p-4 w-[40%]">
          <h1 className="text-red-500 text-xl font-bold">FILMAXX</h1>
        </div>
        <div className="hamburger sm:hidden h-full w-full justify-center items-end gap-[5px] flex flex-col pr-8">
          <span className="h-[3px] w-[30px] bg-white"></span>
          <span className="h-[3px] w-[35px] bg-white"></span>
          <span className="h-[3px] w-[40px] bg-white"></span>
        </div>
        <div className="right hidden sm:flex w-full">
          <div className="navlist w-[80%] lg:w-[85%] text-white flex items-center justify-end text-sm">
            <Link href="/">
              <a className="px-4 py-5 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Daftar Film</a>
            </Link>
            <Link href="/">
              <a className="px-4 py-5 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Kartun</a>
            </Link>
            <Link href="/">
              <a className="px-4 py-5 relative after:content-[''] after:bottom-0 after:h-[2px] hover:after:w-full after:w-0 after:absolute after:bg-red-600 flex flex-col justify-center items-center after:duration-200">Action</a>
            </Link>
          </div>
          <div className="button w-[20%] lg:w-[15%] text-white flex items-center justify-center">
            <Link href="/">
              <a className="hover:bg-red-600 border-2 border-solid border-red-600 duration-200 px-5 text-sm py-2 rounded">Sign In</a>
            </Link>
          </div>
        </div>
      </nav>
      {/* body */}
    <section className='min-h-screen max-w-screen p-4'>
      <div className="content wrapper h-[100vh] w-full flex flex-col gap-4">
          <div className="stream-wrapper h-[40%] lg:h-full w-full">
            <div className="stream h-full w-full flex flex-col items-center ">
              <div className="title w-full text-red-500 before:content-['>'] flex text-sm font-light gap-2 lg:py-4"><h1> `{title}</h1></div>
              <iframe src={stream} width="100%" height="90%" frameborder="0"></iframe>
            </div>
          </div>
          <hr className='border-0 bg-red-500 h-[1px]'/>
          <div className="info-film h-[60%] w-full text-white lg:hidden">
            <div className="title-wrapper h-20% w-full truncate text-lg md:text-2xl font-bold py-4">{title}</div>
            <div className="img-info h-[80%] flex gap-4">
              <div className="img w-[40%]">
                <img src={image} alt="image" />
              </div>
              <div className="right w-[60%] text-sm md:text-base">
                <p>Sinopsis : {sinopsis}</p>
                <br />
                <p>Kategori : {kategori}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="info-film h-[100vh] w-full text-white hidden lg:block">
          <div className="title-wrapper h-[20%] w-full truncate text-lg md:text-2xl font-bold py-4">{title}</div>
          <div className="img-info h-[80%] flex gap-4">
            <div className="img w-[40%] flex justify-center">
              <img src={image} width={350} height={400} alt="image" />
            </div>
            <div className="right w-[60%] text-sm md:text-base">
              <p>Sinopsis : {sinopsis}</p>
              <br />
              <p>Kategori : {kategori}</p>
            </div>
          </div>
        </div>
      <div className="sidebar h-[100vh] w-full ">
        
      </div>
      </section>
    </>
  )
}

export default watching