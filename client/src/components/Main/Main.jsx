import Topbar from "./components/Topbar";
import Share from "./components/Share";
import Feed from "./components/Feed";
import './styles/styles.css'

function Main() {
    return (
    <div className="main">
      <Topbar />
      <Share />
      <Feed />
    </div>
  );
}

export default Main;
