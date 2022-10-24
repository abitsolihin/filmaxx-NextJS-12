import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BsBoxArrowLeft } from 'react-icons/bs';

const Watching = () => {
  const [stream, setStream] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true)
  const router = useRouter();
  const { watching } = router.query;

  const mouseMove = () => {
    document.getElementById("title").style.opacity = "1";
  }
  const mouseEnter = () => {
    document.getElementById('title').style.opacity = '1';
  }
  const mouseOut = () => {
    document.getElementById("title").style.opacity = "0";
  }

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/films/film/${watching}`)
      .then((res) => {
        setStream(res.data.stream_url);
        setLoading(false)
        setTitle(res.data.name)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [watching]);

  return (
    <>
      {/* body */}
      <section className="max-h-screen max-w-screen">
        <div class="container h-screen w-screen flex items-center justify-center relative ">
          <div id="title" className="absolute top-2 right-2 text-white flex items-start gap-2 duration-300">
            <p className="text-2xl">{title}</p>
          </div>
          <div className="absolute top-2 left-2 text-white flex items-start gap-2 duration-300 z-50 cursor-pointer">
            <a className="flex items-center gap-2 " onClick={() => router.back()}>
              <BsBoxArrowLeft /> <span className="text-xs">Kembali</span>
            </a>
          </div>
          {loading ? (
            <div className="h-full w-full flex items-center justify-center">
              <div className="circle w-[50px] h-[50px] rounded-full border-r-4 border-b-4 border-l-4 border-t-4 animate-spin animate-bounce border-red-600 border-solid z-40 text-white">
                <svg class="circular-loader" viewBox="25 25 50 50">
                  <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#dc2626" stroke-width="3" />
                </svg>
              </div>
            </div>
          ) : (
            <iframe onMouseMove={mouseMove} onMouseOut={mouseOut} onMouseEnter={mouseEnter} src={stream} width="98%" height="98%" frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
          )}
        </div>
      </section>
    </>
  );
}

export default Watching