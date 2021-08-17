import React from "react";
import PropTypes from "prop-types";

const ActionLink = () => {
  const HandleName = () => {
    alert("Nidhal Katar");
  };
  return (
    <a
      href="/"
      onClick={HandleName}
      style={{
        width: "150px",
        height:"30px",
        marginTop: "5%",
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
      }}
    >
      Click Me !
    </a>
  );
};
ActionLink.propTypes = {
  HandleName: PropTypes.func,
};

export default ActionLink;