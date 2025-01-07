import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
function App() {
  return (
    <>
      <h1 className="text-red-500">Gerenciador de tarefas</h1>
      <Tasks/>
      <AddTask/>
    </>
  );
}

export default App;
