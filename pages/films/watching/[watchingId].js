'use client'

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { BsBoxArrowLeft } from 'react-icons/bs';

const Watching = ({ watch }) => {
  const router = useRouter();


  const hideNavbar = () => {
    document.getElementById("title").style.opacity = "0";
    document.getElementById("button").style.opacity = "0";
  }

  const hideCursor = () => {
    document.body.style.cursor = 'none';
  }
  
  useEffect(() => {
    let idleTimer;
    document.onmousemove = () => {
    clearTimeout(idleTimer);
    document.body.style.cursor = 'auto';
    document.getElementById('title').style.opacity = '1';
    document.getElementById('button').style.opacity = '1';
  
    idleTimer = setTimeout(() => {
      hideNavbar();
      hideCursor();
    }, 3000);
  };
  },[])
    
  
  return (
    <>
      {/* body */}
      <section className="max-h-screen max-w-screen flex items-center justify-center">
        <div class="container h-screen w-screen flex items-center justify-center relative ">
          <div id="title" className="absolute top-2 right-2 text-white flex items-start gap-2 duration-300">
            <p className="text-2xl">{watch.title}</p>
          </div>
          <div id='button' className="absolute top-4 left-4 text-white flex items-start gap-2 duration-300 z-50 cursor-pointer">
            <button className="flex items-center gap-2 " onClick={() => router.back()}>
              <BsBoxArrowLeft size={28}/> <span className="text-base">Kembali</span>
            </button>
          </div>
          <div className="wrapper-iframe w-full h-full flex items-center justify-center">
          <iframe src={watch.stream_url} width="98%" height="98%" frameBorder="0" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
          </div>
            
        </div>
      </section>
    </>
  );
}

export default Watching

export const getStaticPaths = async () => {
  const response = await fetch(`https://filmaxx-server.vercel.app/films`);
  const data = await response.json();
  const paths = data.map((item) => ({
    params: {
      watchingId: `${item.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params}) => {
  const resp = await fetch(`https://filmaxx-server.vercel.app/films/${params.watchingId}`);
  const watch = await resp.json();

  return {
    props: {
      watch,
    },
  };
};