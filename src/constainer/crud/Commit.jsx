import { v4 } from "uuid";
import msgImg from "../../assets/commit/Frame 4.png";
import msg from "../../assets/commit/Video/Frame.png";
import icon from "../../assets/commit/Frame.png";
import "./Commit.scss";
import { useState } from "react";
const Commit = () => {
//   const commitJson = JSON.stringify(localStorage.getItem("commit"));
  const [commits, setCommits] = useState([]);
  const [commit, setCommit] = useState({
    commits: "",
  });

  const handlCommit = (e) => {
    setCommit({ ...commit, [e.target.id]: e.target.value });
  };

  const clickCommit = () => {
    let newCommits = [...commits, { ...commit, id: v4() }];
    setCommits(newCommits);
    localStorage.setItem("commit", JSON.stringify(newCommits));

    setCommit({
      commits: "",
    });
  };

  return (
    <div>
      <div className="commint-number">
        <p className="commit-1">604 Comments</p>
        <p className="commit-2">
          <img src={msg} alt="" />
          SORT BY
        </p>
      </div>
      <div className="form">
        <img src={msgImg} alt="" />
        <div className="form">
          <input
            type="text"
            onChange={handlCommit}
            value={commit.commits}
            id="commits"
            placeholder="Add a comment..."
          />
          <div className="icon-btn">
            <img src={icon} alt="" />
            <div className="submit-btn">
              <button className="no-btn">CANCEL</button>
              <button className="yes-btn" onClick={clickCommit}>
                COMMENT
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="commints">
        {commits.length ? (
          commits.map((el) => (
            <p key={el.id} className="commit-p">
              {el.commits}
            </p>
          ))
        ) : (
          <p>No commits</p>
        )}
      </div>
    </div>
  );
};

export default Commit;
