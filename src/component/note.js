import React from "react";
import deleteicon from "./img/delete icon.png";

const Note = (props) => {
  return (
    <>
      <div className="Note">
        <h2> {props.Newtitle}</h2>

        <h2> {props.Newcontent}</h2>
        <img src={deleteicon} alt="delete" width={20} className="delete"  onClick={
            () => props.delete(props.id)
        } />
      </div>
    </>
  );
};

export default Note;
