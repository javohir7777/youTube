import { useEffect, useState } from "react";
import { requies } from "../../server";
import Card from "../../constainer/card";
// import ReactPlayer from "react-player";

const Home = () => {
  const [getVedio, setGetVedio] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const { data } = await requies.get("search");
      setGetVedio(data.items);
    } catch (error) {
      console.log(error + "Error");
    }
  };
  console.log(getVedio);

  return (
    <div className="row g-3">
      {getVedio.map((home) => (
        <Card key={home.id.videoId} home={home} />
      ))}
    </div>
  );
};

export default Home;
