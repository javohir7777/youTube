import { NavLink, Outlet } from "react-router-dom";
import "./Main.scss";
import home from "../../assets/navbar/home.png";
import compos from "../../assets/navbar/compos.png";
import short from "../../assets/navbar/short.png";
import subtitre from "../../assets/navbar/subtitre.png";
import labrery from "../../assets/navbar/labrery.png";
import history from "../../assets/navbar/history.png";
import videos from "../../assets/navbar/videos.png";
import watch from "../../assets/navbar/watch.png";
import pop from "../../assets/navbar/pop.png";

const Main = () => {
  return (
    <main>
      <div className="side-bar">
        <nav className="nav">
          <ul className="nav-menu">
            <NavLink className="nav-menu__item" to="/">
              <img src={home} alt="" />
              Home
            </NavLink>
            <NavLink className="nav-menu__item" to="/explore">
              <img src={compos} alt="" />
              Explore
            </NavLink>
            <NavLink className="nav-menu__item" to="/shorts">
              <img src={short} alt="" />
              Shorts
            </NavLink>
            <NavLink className="nav-menu__item" to="/subscriptions">
              <img src={subtitre} alt="" />
              Subscriptions
            </NavLink>
          </ul>
          <hr />
          <ul className="nav-menu2">
            <NavLink className="nav-menu__item" to="/library">
              <img src={labrery} alt="" />
              Library
            </NavLink>
            <NavLink className="nav-menu__item" to="/history">
              <img src={history} alt="" />
              History
            </NavLink>
            <NavLink className="nav-menu__item" to="/videos">
              <img src={videos} alt="" />
              Your videos
            </NavLink>
            <NavLink className="nav-menu__item" to="/watch">
              <img src={watch} alt="" />
              Watch later
            </NavLink>
            <NavLink className="nav-menu__item" to="/pop">
              <img src={pop} alt="" />
              Pop
            </NavLink>
            <a className="show" href="">
              Show more
            </a>
          </ul>
          <hr />
        </nav>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
