import "./styles/home.css";
import Leftbar from "../components/Leftbar/Leftbar";
import Topbar from "../components/Main/Topbar";
import Share from "../components/Main/Share";
import Feed from "../components/Main/Feed";

function Home() {
  return (
    <div className="container">
      <div className="left-bar">
        <Leftbar />
      </div>
      <div className="main">
        <Topbar />
        <Share />
        <Feed />
      </div>
      <div className="right-bar">OK?!</div>
    </div>
  );
}

export default Home;
