import Image from "next/image";

const Home = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center px-4">
      <div className="basis-[560px] ml-auto mr-auto relative z-10">
        <Image
          src="/logo.png"
          alt="Weather app Logo"
          priority
          width={180}
          height={37}
        />
        <div className="w-full h-80 p-3 background-main">dfsdf</div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-t to-background-top from-background-bottom">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute top-0 left-0 opacity-60"
        >
          <source src="./background.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
