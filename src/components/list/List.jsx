import React, { useState } from "react";
import "./List.css";

const List = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick(e) {
    const { checked } = e.target;
    console.log(checked);
    setIsClicked(checked);
    console.log(e);
  }
  return (
    <>
      <div className="flex my-3 justify-between w-48">
        <input
          type="checkbox"
          name=""
          id=""
          className="mx-4 bg-gradient-to-t from-[#c94b4b] to-[#4b134f]"
          onClick={handleClick}
        />
        <h3 className={isClicked ? "line-through" : null}>{props.value}</h3>
        <button
          className="bg-red-700 text-white px-3 p-1 rounded-md"
          onClick={() => {
            props.deleteAction(props.id);
          }}
        >
          X
        </button>
      </div>
    </>
  );
};

export default List;
