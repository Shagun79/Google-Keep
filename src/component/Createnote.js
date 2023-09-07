import React, { useState } from "react";
import img from "./img/plus icon.png";
import Note from "./note";
let Createnote = () => {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const [items, setitems] = useState([]);

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setnote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const getItem = () => {
    setitems((prevData) => {
      return [...prevData, note];
    });
  };
  const deleteItem = (id) => {
    console.log(id);
    setitems((arrayValue) => {
      return arrayValue.filter((cElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="mainDiv">
        <div className="InputBox">
          <form>
            <input
              type="text"
              placeholder="                  Title"
              name="title"
              onChange={inputEvent}
              value={note.title}
            />

            <h2>
              <textarea
                id=""
                name="content"
                rows=""
                cols=""
                placeholder="            Content"
                value={note.content}
                onChange={inputEvent}
              />
            </h2>

            <img
              src={img}
              className="plus"
              alt="plus"
              width={30}
              height={30}
              onClick={getItem}
            />
          </form>
        </div>
      </div>

      {items.map((data, index) => {
        return (
          <Note
            id={index}
            key={index}
            Newtitle={data.title}
            Newcontent={data.content}
            delete={deleteItem}
          />
        );
      })}
    </>
  );
};
export default Createnote;
