import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("onClick");
  };
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
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
