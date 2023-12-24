import "./Header.scss";
import hamburger from "../../assets/header/hamburger.png";
import youTube from "../../assets/header/youTube.png";
import search from "../../assets/header/search.png";
import golos from "../../assets/header/golos.png";
import camera from "../../assets/header/camera.png";
import qungiroq from "../../assets/header/qungiroq.png";
import image from "../../assets/header/image.png";

const Header = () => {
  return (
    <header>
      <div className="youTube-brand">
        <img src={hamburger} alt="" />
        <img src={youTube} alt="" />
      </div>
      <div className="youTube-search">
        <form className="input">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <img src={search} alt="" />
          </button>
        </form>
        <div className="golos">
          <img src={golos} alt="" />
        </div>
      </div>
      <div className="youTube-video">
        <img src={camera} alt="" />
        <img src={qungiroq} alt="" />
        <img src={image} alt="" />
      </div>
    </header>
  );
};

export default Header;
