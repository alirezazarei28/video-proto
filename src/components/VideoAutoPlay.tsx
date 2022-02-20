import { useEffect } from "react";

const VideoAutoPlay: React.FC<{ videos: string[] }> = ({ videos }) => {
  useEffect(() => {
    let videos = document.querySelectorAll("video");
    let options = {
      root: null,
      threshold: [0.2, 0.4, 0.6, 0.8, 1],
      rootMargin: "-35% 0% -35% 0%",
    };
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.4) {
          (entry.target as HTMLVideoElement).play();
        } else {
          (entry.target as HTMLVideoElement).pause();
        }
      });
    }, options);

    videos.forEach((video) => {
      observer.observe(video);
    });
  }, [videos]);

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
