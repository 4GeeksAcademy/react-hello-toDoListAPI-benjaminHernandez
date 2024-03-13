import React, { useEffect, useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const username = "yourusername"; // replace this with your actual username

  // Fetch the initial todo list from the server when the component mounts
  useEffect(() => {
    fetch(`https://assets.breatheco.de/apis/fake/todos/user/${username}`)
      .then((response) => response.json())
      .then((data) => setTodos(data.map((item) => item.label)))
      .catch((error) => console.error(error));
  }, []);

  // Function to update the todo list on the server
  const updateTodosOnServer = (todos) => {
    fetch(`https://assets.breatheco.de/apis/fake/todos/user/${username}`, {
      method: "PUT",
      body: JSON.stringify(todos.map((todo) => ({ label: todo, done: false }))),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  // Add a new todo
  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    updateTodosOnServer(newTodos);
  };

  // Delete a todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((t, currentIndex) => index !== currentIndex);
    setTodos(newTodos);
    updateTodosOnServer(newTodos);
  };

  // Clear all todos
  const clearTodos = () => {
    setTodos([]);
    fetch(`https://assets.breatheco.de/apis/fake/todos/user/${username}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div id="container">
      <h1 className="todo-header">To do List</h1>
      <input
        id="addToDo"
        type="text"
        placeholder="Add to do here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(inputValue);
            setInputValue("");
          }
        }}
      />
      <button onClick={clearTodos}>Clear All Tasks</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <span>
              <i className="fa fa-trash" onClick={() => deleteTodo(index)}></i>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
