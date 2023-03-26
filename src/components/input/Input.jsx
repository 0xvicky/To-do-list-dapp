import React, { useState } from "react";
import "./Input.css";
import { Button } from "../../components";

const Input = (props) => {
  const [note, setNote] = useState("");
  function handleChange(e) {
    const { value } = e.target;
    setNote(value);
  }

  function addItem(e) {
    props.addAction(note);
    setNote("");
    e.preventDefault();
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <input
          className="shadow-gradient h-fit border-2 border-[#c94b4b] border-solid mr-2 p-2 rounded-md caret-[#4b134f] focus:text-[#4b134f] focus:outline-none "
          type="text"
          placeholder="Enter note"
          value={note}
          onChange={handleChange}
        />
        <Button action={addItem} text="Add" />
      </div>
    </>
  );
};

export default Input;
