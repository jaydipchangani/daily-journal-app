import React, { useEffect, useState } from "react";

function Body() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  function addOrUpdateTask() {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedList = [...taskList];
      updatedList[editIndex] = task;
      setTaskList(updatedList);
      setEditIndex(null);
      setTask("");
    } else {
      setTaskList([...taskList, task]);
      setTask("");
    }
  }

  function deleteTask(index) {
    const updatedtask = taskList.filter((_, i) => i !== index);
    setTaskList(updatedtask);
  }

  function editTask(index) {
    setTask(taskList[index]);
    setEditIndex(index);
  }

  return (
    <div>
      <h1 class="text-3xl font-bolder underline">Body</h1>
      <label name="task">Enter your task:</label>{" "}
      <input
        type="text"
        className="border-2"
        name="task"
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button onClick={addOrUpdateTask} class="border-2 ml-2 px-1">
        {editIndex == null ? "Add Task" : "Edit Task"}
      </button>
      <ul>
        {taskList.map((t, index) => (
          <li key={index}>
            {t}
            <button
              onClick={() => editTask(index)}
              className="border-2 px-1 ml-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(index)}
              className="border-2 px-1 ml-2"
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;
