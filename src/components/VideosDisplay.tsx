import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import VideoAutoPlay from "./VideoAutoPlay";

const VideosDisplay: React.FC = () => {
  const { data, error, loading } = useTypedSelector((state) => state.videos);
  const { fetchVideos } = useActions();

  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        {error && <h3>{error}</h3>}
        {loading && <h3>{"loading ..."}</h3>}
        {/* {!error && !loading && data.map((name) => <div key={name}>{name}</div>)} */}
        {!error && !loading && <VideoAutoPlay videos={data} />}
      </div>
    </div>
  );
};

export default VideosDisplay;
