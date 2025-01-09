import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, settasks] = useState([
    {
    id: 1,
    title: "Estudar programação",
    Description: "Estudar programação para se tornar um desenvolvedor full stack",
    isCompleted: false
  },
  {
    id: 2,
    title: "Estudar Inglês",
    Description: "Estudar inglês para se tornar um fluente",
    isCompleted: false
  },
  {
    id: 3,
    title: "Estudar matematica",
    Description: "Estudar matematica para se tornar um desenvolvedor full stack",
    isCompleted: false
  }
])
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
      <Tasks tasks={tasks}/>
      <AddTask/>
      </div>
    </div>
  );
}

export default App;
