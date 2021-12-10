import Search from "./components/Search";
import Trends from "./components/Trends";
import WhoToFollow from "./components/WhoToFollow";
import Footer from "./components/Footer";
import './styles/styles.css'

function Rightbar() {
  return (
    <div className="rightbar-container">
      <Search className="rightbar-search" />
      <Trends className="rightbar-trends"/>
      <WhoToFollow className="rightbar-whotofollow" />
      {/* <Footer className="rightbar-footer" /> */}
    </div>
  );
}

export default Rightbar;
