import React from "react";
import Onelab from "./Onelab.jsx";
const Lab = (props) => (
  <div>
    {props.lab.map((e,i) => {
      return (
   <Onelab key={i} e={e} dellab={props.dellab} Updatelab={props.Updatelab}/>
      );
    })}
  </div>
);

export default Lab;
