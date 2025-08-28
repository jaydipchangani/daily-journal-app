import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

function Body() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useTheme();
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
      updatedList[editIndex].text = task;
      setTaskList(updatedList);
      setEditIndex(null);
      setTask("");
    } else {
      const newTask = {
        text: task,
        createdAt: new Date().toISOString(),
        completedAt: null,
        isCompleted: false,
      };
      setTaskList([...taskList, newTask]);
      setTask("");
    }
  }

  function deleteTask(index) {
    const updatedtask = taskList.filter((_, i) => i !== index);
    setTaskList(updatedtask);
  }

  function editTask(index) {
    setTask(taskList[index].text);
    setEditIndex(index);
  }

  function toggleComplete(index) {
    const updatedList = [...taskList];
    const task = updatedList[index];
    task.isCompleted = !task.isCompleted;
    task.completedAt = task.isCompleted ? new Date().toISOString() : null;
    setTaskList(updatedList);
  }

  const filteredTasks = taskList.filter((t) =>
    t.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`max-w-md mx-auto mt-10 p-6 rounded-xl shadow-lg transition ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <div className="flex items-center mb-4">
        <input
          type="text"
          className={`flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
            theme === "light"
              ? "border-gray-300 focus:ring-blue-400"
              : "border-gray-600 bg-gray-700 text-white focus:ring-yellow-400"
          }`}
          name="task"
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button
          onClick={addOrUpdateTask}
          className={`ml-2 px-4 py-2 rounded-lg font-medium text-white transition ${
            editIndex == null
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-yellow-700 hover:bg-yellow-600"
          }`}
        >
          {editIndex == null ? "Add Task" : "Update Task"}
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
            theme === "light"
              ? "border-gray-300 focus:ring-green-400"
              : "border-gray-600 bg-gray-700 text-white focus:ring-green-300"
          }`}
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="max-h-128 overflow-y-auto pr-2">
        <ul className="space-y-3">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((t, index) => (
              <li
                key={index}
                className={`flex flex-col px-4 py-2 rounded-lg shadow-sm ${
                  theme === "light" ? "bg-gray-100" : "bg-gray-700"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`${
                      t.isCompleted ? "line-through opacity-60" : ""
                    }`}
                  >
                    {t.text}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => editTask(index)}
                      className="px-3 py-1 text-sm rounded-lg bg-yellow-600 text-white hover:bg-yellow-500 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => toggleComplete(index)}
                      className="px-3 py-1 text-sm rounded-lg bg-green-600 text-white hover:bg-green-500 transition"
                    >
                      {t.isCompleted ? "Undo" : "Complete"}
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="px-3 py-1 text-sm rounded-lg bg-red-600 text-white hover:bg-red-500 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="text-xs opacity-70 mt-1">
                  Added: {new Date(t.createdAt).toLocaleString()}
                  {t.completedAt && (
                    <>
                      {" "}
                      | Completed: {new Date(t.completedAt).toLocaleString()}
                    </>
                  )}
                </div>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No tasks found</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Body;
