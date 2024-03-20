import { MdKeyboardArrowRight } from "react-icons/md";
const MyMatches = () => {
  return (
    <div>
   
      <div className="d-flex">
        <h1 className="my-match-title">My Matches</h1>{" "}
        <button className="my-match-btn">
          <span>View All</span>{" "}
          <MdKeyboardArrowRight style={{ textAlign: "end" }} size={20} />{" "}
        </button>
      </div>
      <div className="my-match-card-container">
        <div className="d-flex">
          <div className="d-flex">
            <img className="my-match-img" src="/assets/img/img1.jpeg" alt="" />
            <h3 className="my-match-country">DEl-W</h3>
          </div>
          <div>
            <p className="my-match-completed">Completed</p>
            <p className="my-match-date">17 Mar, 7:30pm</p>
          </div>
          <div className="d-flex">
            <h3 className="my-match-country">BAN-W</h3>
            <img className="my-match-img" src="/assets/img/img2.jpeg" alt="" />
          </div>
        </div>
        <div className="d-flex my-match-team-won-container">
          <p className="my-match-team-contest">1 Team, 1 Contest</p>
          <p className="my-match-won">You won $9</p>
        </div>
      </div>
    </div>
  );
};

export default MyMatches;
