import React, { useState, useReducer } from "react";
import reducerFunction from "./reducers";

export default function Comp1() {
  const [taskList, dispatch] = useReducer(reducerFunction, LOT);

  const handleAddTask = (text) => {
    dispatch({
      type: "ADD_TASK",
      text: text,
      id: taskList.length,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TASK",
      id: id,
    });
  };

  const handleEdit = (id, text) => {
    dispatch({
      type: "EDIT_TASK",
      id: id,
      text: text,
    });
  };

  return (
    <div>
      <Search onTaskAddition={handleAddTask} />
      <List
        tasks={taskList}
        onTaskDelete={handleDelete}
        onTaskEdit={handleEdit}
      />
    </div>
  );
}

const Search = ({ onTaskAddition }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <form>
        <h1>
          <b>Visit India Itinerary</b>
        </h1>
        <label className="px-[20px]">ToDo:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2"
        />
        <button
          className="border bg-[#dfdfdf] ml-[5px] px-3 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            onTaskAddition(text);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

const List = ({ tasks, onTaskDelete, onTaskEdit }) => {
  const [isEditable, setIsEditable] = useState(-1);
  return (
    <div className="pt-[20px]">
      <ul>
        {tasks.map((task) => {
          return (
            <>
              <div key={task.id} className="flex flex-row py-[10px]">
                {isEditable != task.id ? (
                  <li className="pl-[20px]" key={task.id}>
                    {task.text}
                  </li>
                ) : (
                  <input className="pl-[20px] border" value = {task.text} onChange = {(e)=>onTaskEdit(task.id, e.target.value, )}></input>
                )}
                <button
                  className="border bg-[#dfdfdf] ml-[5px] px-3 rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsEditable(task.id);
                  }}
                >
                  {" "}
                  Edit{" "}
                </button>
                <button
                  className="border bg-[#dfdfdf] ml-[5px] px-3 rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    onTaskDelete(task.id);
                  }}
                >
                  Delete{" "}
                </button>
              </div>
              <hr />
            </>
          );
        })}
      </ul>
    </div>
  );
};

const LOT = [
  { id: 0, text: "visit the Taj Mahal" },
  { id: 1, text: "eat roadside vada pav" },
  { id: 2, text: "meet all relatives" },
];
