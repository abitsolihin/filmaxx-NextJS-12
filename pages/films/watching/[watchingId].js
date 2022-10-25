import { useRouter } from 'next/router';
import { BsBoxArrowLeft } from 'react-icons/bs';

const Watching = ({ watch }) => {
  
  const router = useRouter();

  const mouseMove = () => {
    document.getElementById("title").style.opacity = "1";
  }
  const mouseEnter = () => {
    document.getElementById('title').style.opacity = '1';
  }
  const mouseOut = () => {
    document.getElementById("title").style.opacity = "0";
  }

  return (
    <>
      {/* body */}
      <section className="max-h-screen max-w-screen">
        <div class="container h-screen w-screen flex items-center justify-center relative ">
          <div id="title" className="absolute top-2 right-2 text-white flex items-start gap-2 duration-300">
            <p className="text-2xl">{watch.name}</p>
          </div>
          <div className="absolute top-2 left-2 text-white flex items-start gap-2 duration-300 z-50 cursor-pointer">
            <a className="flex items-center gap-2 " onClick={() => router.back()}>
              <BsBoxArrowLeft /> <span className="text-xs">Kembali</span>
            </a>
          </div>
            <iframe onMouseMove={mouseMove} onMouseOut={mouseOut} onMouseEnter={mouseEnter} src={watch.stream_url} width="98%" height="98%" frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </div>
      </section>
    </>
  );
}

export default Watching

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/films`);
  const data = await response.json();

  const paths = data.map((item) => ({
    params: {
      watchingId: `${item.name}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params}) => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/films/film/${params.watchingId}`);
  const watch = await resp.json();

  return {
    props: {
      watch,
    },
  };
};