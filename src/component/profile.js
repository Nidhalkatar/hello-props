import React from "react";
import PropTypes from 'prop-types';



const profile = (props) => {
  const{fullName,bio,profession}=props;
  return (
    <div
      style={{
        backgroundColor: "rosybrown",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    
      }}
    >
      <img
        src={props.img}
        alt="error"
        style={{ width: "200px", height: "250px"}}
      />
      <h2 style={{ color: "olivedrab" }}>{fullName}</h2>
      <p style={{ width: "250px",textAlign:"center" }}>Bio : {bio}</p>
      <p style={{width:"250px",textAlign:"center"}}>Profession : {profession}</p>
      
    </div>
  );
};
profile.defaultProps = {
  img :'failed to load' , fullName :'failed to load', bio :'failed to load', profession:'failed to load'
}
profile.propTypes = {
  fullName : PropTypes.string,
  bio : PropTypes.string,
  profession : PropTypes.string,
  handleName : PropTypes.func
}

export default profile;
