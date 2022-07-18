import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "#dd0000" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </div>
  );
};
Header.defaultProps = {
  title: "Default Title",
};

Header.propTypes = { title: PropTypes.string.isRequired };

// CSS in JS
// const headerStyling = {
//   color: "white",
//   backgroundColor: "black",
//   textAlign: "center",
//   padding: "50px",
//   margin: "0px",
//   fontSize: "40px",
// };

export default Header;
