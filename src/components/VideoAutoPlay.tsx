import { useEffect } from "react";
import observer from "../utils/videoObserver";

const VideoAutoPlay: React.FC<{ videos: string[] }> = ({ videos }) => {
  useEffect(() => {
    if ("IntersectionObserver" in window) {
      let videos = document.querySelectorAll("video");

      videos.forEach((video) => {
        observer.observe(video);
      });
    } else {
      // polyfill comes here
    }
  }, [videos]);

  return (
    <div>
      {videos &&
        videos.map((video) => {
          return (
            <div key={video}>
              <video
                style={{ marginTop: "20px", padding: "20px" }}
                playsInline
                autoPlay={false}
                muted
                loop
                controls
                height={300}
                width={300}
              >
                <source type="video/mp4" src={video}></source>
                {"browser does not support video"}
              </video>
            </div>
          );
        })}
    </div>
  );
};

export default VideoAutoPlay;
