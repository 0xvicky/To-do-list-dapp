import React, { useState } from "react";
import "./Note.css";
import { Input, List } from "../../components";
const Note = () => {
  const [item, setItem] = useState([]);

  function handleItem(task) {
    task !== "" && setItem((prev) => [...prev, task]);
  }

  function handleDelete(id) {
    setItem((prevItem) => {
      return prevItem.filter((task, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className="parent flex flex-col items-center py-5">
        <div className="flex justify-center items-center h-56">
          <Input addAction={handleItem} />
        </div>
        {item?.map((task, index) => {
          return (
            <List
              value={task}
              key={index}
              id={index}
              deleteAction={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default Note;
