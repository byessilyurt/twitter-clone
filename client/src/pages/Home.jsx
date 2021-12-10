import "./styles/home.css";
import Leftbar from "../components/Leftbar/Leftbar";
import Main from "../components/Main/Main";
import Rightbar from "../components/Rightbar/Rightbar";

function Home() {
  return (
    <div className="container">
      <div className="left-bar">
        <Leftbar />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="right-bar">
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
