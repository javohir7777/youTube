import ReactPlayer from "react-player";
import { requies } from "../../server";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const OnePage = () => {
    const { videoId } = useParams();
  console.log(videoId);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await requies.get(`videos?part=snippet,statistics&id=${videoId}`);
        console.log(data.items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [videoId]);
  return (
    <div className="container">
      <br />
      <br />
      <h1 style={{ color: "red" }}>OnePage: {videoId}</h1>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} />
    </div>
  )
}

export default OnePage