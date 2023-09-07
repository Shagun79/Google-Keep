import React from "react";
import deleteicon from "./delete icon.png";


const Note = (props) => {
  return (
    <div className="Note">
      <h1>{props.Newtitle}</h1> <br />
      <p>{props.Newcontent}</p>
      <img src={deleteicon} alt="delete" width={20} className="delete"  onClick={props.Delete}/>
    </div>
  );
};

export default Note;
