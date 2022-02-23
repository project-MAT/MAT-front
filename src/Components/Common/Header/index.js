import * as I from "../../../Assets/SVG";
import "./style.css";

const Header = () => {
  return (
    <header>
      <I.SmallLogo />
      <div className="searchSection">
        <input type="text" />
        <div className="search">
          <I.Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
