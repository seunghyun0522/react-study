import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo === "") return;
    setToDos((currentArray) => [currentArray, ...toDo]);
    console.log(toDos);
    setToDo("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      {toDos}
    </div>
  );
}

export default App;
