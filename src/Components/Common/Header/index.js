import * as I from "../../../Assets/SVG";
import "./style.css";

const Header = () => {
  return (
    //여기부터 JSX
    <header>
      <I.SmallLogo />
      <div className="searchSection">
        <input type="text" />
        <div className="search">
          <I.Search />
        </div>
      </div>
    </header>
    //여기까지 JSX
  );
};

export default Header;
