import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
function App() {
  const [todo, setTodo] = useState([]);
  const [weeklyTodo, setWeeklyTodo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [weeklyNewTask, setWeeklyNewTask] = useState("");
  // const task = [
  //   "Installing react",
  //   "understanding JSX",
  //   "Installing Tailwind",
  //   "Tailwing Css classes to style",
  //   "Dynamic to-do list",
  //   "Im learning map methods and rendering homie",
  // ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if(newTask.trim()){
    setTodo((todo) => [...todo, newTask]);
    setNewTask("");
    }
  };
  const handleWeeklySubmit = (e) => {
    e.preventDefault();
    if(weeklyNewTask.trim()){
    setWeeklyTodo((weeklyTodo) => [...weeklyTodo, weeklyNewTask]);
    setWeeklyNewTask("");
    }
  };
  return (
    <>
       <h1 className="mb-8 bg-black text-4x1 text-white h-auto font-bold text-center">
          <h1>React 1st Task</h1>
        </h1>
     
      <div className= "flex justify-around space-x-8 rounded-sm">
        <div className=" min-h-screen bg-blue-500 p-5 rounded-2xl ">
          {/*first div*/}
        <div className="bg-white p-5 m-5 max-w-xl rounded-lg shadow-md">
            <p className="text-3xl p-2">
              <b>My Tasks Today :</b>
            </p>
            <form className="m-2 flex gap-3" onSubmit={handleSubmit}>
              <input
                placeholder="Enter the task"
                type="text"
                value={newTask}
                className=" px-1 py-2 border-gray-700 border rounded-lg w-96"
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
              ></input>
              <button class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Add Task
              </button>
            </form>
            <ul>
              {todo.map((ele, index) => {
                return (
                  <li key={index} className=" text-2xl font-light">
                    {ele}
                  </li>
                );
              })}
            </ul>
          </div>
          </div>
          <div className=" min-h-screen bg-emerald-400 p-5 rounded-2xl ">
          {/*second div*/}
          <div className="bg-white p-5 m-5 max-w-xl
          rounded-lg shadow-md">
            <p className="text-3xl p-2">
              <b>Tasks Of The Week :</b>
            </p>
            <form className="m-2 flex gap-3" onSubmit={handleWeeklySubmit}>
              <input
                placeholder="Enter the task"
                type="text"
                value={weeklyNewTask}
                className=" px-1 py-2 border-gray-700 border rounded-lg w-96"
                onChange={(e) => {
                  setWeeklyNewTask(e.target.value);
                }}
              ></input>
              <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Add Task
              </button>
            </form>
            <ul>
              {weeklyTodo.map((elem, index) => {
                return (
                  <li key={index} className=" text-2xl font-light">
                    {elem}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;