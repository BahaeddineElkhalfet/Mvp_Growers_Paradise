import React from "react";
import Onekid from "./Onekid.jsx";
const Kids = (props) => (
  <div className="all">
    {props.kids.map((e,i) => {
      return (
      <Onekid key={i} 
    e={e} i={i} del={props.del} handleupdate={props.handleupdate}/>
      );
    })}
  </div>
);

export default Kids;
