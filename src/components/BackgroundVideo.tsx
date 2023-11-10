const BackgroundVideo = () => {
  return (
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
  );
};

export default BackgroundVideo;
