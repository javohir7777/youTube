import { Fragment } from "react";
import PropTypes from "prop-types";

import "./Card.scss";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ home }) => {
  console.log(home);
  const data = new Date(home?.snippet?.publishTime).toISOString().split("T")[0];
  let time = new Date(home?.snippet?.publishedAt).toISOString().split("T")[1];
  let nowTime = time.split(".")[0];
  return (
    <Fragment>
      <div className="col-12 col-sm-6 col-md-4 col-lg-4">
        <Link className="one-page" to={`onePage/${home.id.videoId}`}>
          <div className="card">
            <LazyLoadImage
              className="card-img-top"
              src={home?.snippet?.thumbnails?.high?.url}
              effect="blur"
              alt={home?.snippet?.title}
            />
            <div className="card-body">
              <img
                className="card-img"
                src={home?.snippet?.thumbnails?.high?.url}
                alt=""
              />
              <div className="card-texts">
                <h5 className="card-title">{home?.snippet?.description}</h5>
                <p className="card-text">
                  {home?.snippet?.channelTitle}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g opacity="0.5">
                      <path
                        d="M7.5 1.25001C4.0625 1.25001 1.25 4.06251 1.25 7.50001C1.25 10.9375 4.0625 13.75 7.5 13.75C10.9375 13.75 13.75 10.9375 13.75 7.50001C13.75 4.06251 10.9375 1.25001 7.5 1.25001ZM6.125 10.8125L3.5 8.25001L4.375 7.37501L6.125 9.06251L10.625 4.62501L11.5 5.50001L6.125 10.8125Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </p>
                <div className="span">
                  <span>{nowTime}</span>·<span>{data}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};
Card.propTypes = {
  home: PropTypes.object,
};
export default Card;
