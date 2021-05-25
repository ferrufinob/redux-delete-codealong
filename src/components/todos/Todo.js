import React from "react";

const Todo = (props) => {
  return (
    <div>
      <li>
        {props.text}
        <button onClick={() => props.delete(props.id)}>Delete</button>
      </li>
    </div>
  );
};

export default Todo;
