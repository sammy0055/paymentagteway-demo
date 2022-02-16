import { useState } from "react";

function Todo(props) {
  const initialValue = { id: 0, todo: "", fufilled: false };
  const [input, setInput] = useState(initialValue);
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput(initialValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input.todo}
          onChange={(e) =>
            setInput({
              ...input,
              todo: e.target.value,
              id: Math.random() * new Date(),
            })
          }
        />
        <button type="submit">Add</button>
        {todos.map((todo) => (
          <Todolist
            key={todo.id}
            _todos={todo.todo}
            todos={todos}
            setTodos={setTodos}
            id={todo.id}
            fufilled={todo.fufilled}
          />
        ))}
      </form>
    </div>
  );
}

function Todolist({ todos, _todos, id, setTodos, fufilled }) {
  const handleFufilled = () => {
    let newTodo = [...todos];
    newTodo
      .filter((todo) => todo.id === id)
      .forEach((todo) => (todo.fufilled = true));
    setTodos(newTodo);
  };
  return (
    <div onClick={handleFufilled}>
      {fufilled ? <s>{_todos}</s> : <p>{_todos}</p>}
    </div>
  );
}

export default Todo;
