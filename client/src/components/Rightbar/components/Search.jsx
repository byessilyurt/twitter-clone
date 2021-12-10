import { SearchOutlined } from "@mui/icons-material";
import "../styles/search.css";

function Search() {
  return (
    <div className="search-container">
      <SearchOutlined color='primary' className="search-icon" />
      <input placeholder="Twitter'da Ara" className="search-input" />
    </div>
  );
}

export default Search;
