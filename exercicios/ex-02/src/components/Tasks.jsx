const Tasks = (props) => {
  console.log(props);
  
  return (
    <>
      <h1 className="text-blue-600">{props.tasks.map((task) => {
        <p></p>
      })}</h1>
    </>
  );
};

export default Tasks;
