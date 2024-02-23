import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    //console.log(toDo);
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    console.log(toDos);
    setToDo("");
  };

  const deleteBtn = (event) => {
    const li = event.target.parentElement;
    li.remove();
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
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item} <button onClick={deleteBtn}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
