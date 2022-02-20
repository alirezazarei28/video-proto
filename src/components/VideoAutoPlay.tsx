const VideoAutoPlay: React.FC<{ videos: string[] }> = ({ videos }) => {
  console.log(videos);
  return (
    <div>
      {videos &&
        videos.map((video) => {
          return (
            <div key={video}>
              <video
                style={{ marginTop: "50px", padding: "20px" }}
                playsInline
                autoPlay={false}
                muted
                loop
              >
                <source type="video/mp4" src={video}></source>
              </video>
            </div>
          );
        })}
    </div>
  );
};

export default VideoAutoPlay;
