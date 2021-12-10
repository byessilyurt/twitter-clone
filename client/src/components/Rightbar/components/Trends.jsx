import "../styles/trends.css";
import { Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Trends() {
  return (
    <div className="trends-container">
      <div className="trends-top">
        <div>
          <Typography className="trends-top-title">Türkiye Gündemi</Typography>
        </div>
        <div>
          <SettingsIcon className="trends-top-settings" />
        </div>
      </div>
      <div className="ranking-container">
        <div className="ranking">
          <div className="ranking-top">
            <div className="ranking-top-left">
              <span className="ranking-num">1.</span>
              <span className="ranking-topic">Politika</span>
            </div>
            <span className="ranking-top-right">
              <MoreHorizIcon />
            </span>
          </div>
          <div className="ranking-middle">
            <Typography className="ranking-tweet">#Vazgeçmeyeceğiz</Typography>
          </div>
          <div className="ranking-bottom">
            <Typography className="ranking-tweet-count">57 B Tweet</Typography>
          </div>
        </div>
        <div className="ranking">
          <div className="ranking-top">
            <div className="ranking-top-left">
              <span className="ranking-num">2.</span>
              <span className="ranking-topic">Gündemdekiler</span>
            </div>
            <span className="ranking-top-right">
              <MoreHorizIcon />
            </span>
          </div>
          <div className="ranking-middle">
            <Typography className="ranking-tweet">
              #GSBBurslarıAçıkla
            </Typography>
          </div>
          <div className="ranking-bottom">
            <Typography className="ranking-tweet-count">1 Tweet</Typography>
          </div>
      </div>
        <div className="ranking">
          <div className="ranking-top">
            <div className="ranking-top-left">
              <span className="ranking-num">3.</span>
              <span className="ranking-topic">Spor</span>
            </div>
            <span className="ranking-top-right">
              <MoreHorizIcon />
            </span>
          </div>
          <div className="ranking-middle">
            <Typography className="ranking-tweet">#LarinBuKaçarMı?</Typography>
          </div>
          <div className="ranking-bottom">
            <Typography className="ranking-tweet-count">914 B Tweet</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trends;
