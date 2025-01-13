import React, { useRef, useState, useEffect } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    if (todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handelAddButton = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    if (text.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, newItem]);
      inputRef.current.value = "";
    } else {
      alert("Please enter your task 📚.");
    }
  };

  const deleteButton = (index) => {
    const newTodo = todos.filter((_, i) => i !== index);
    setTodos(newTodo);
  };

  const doneButton = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = !newTodo[index].completed;
    setTodos(newTodo);
  };

  return (
    <div className="to-do-list">
      <h1>To Do List 📚</h1>
      <input type="text" placeholder="Enter the task ..." ref={inputRef} />
      <button className="add-button" onClick={handelAddButton}>
        Add
      </button>
      <ul>
        {todos.map(({ text, completed }, index) => (
          <li key={index}>
            <span className={completed ? "done" : ""}>{text}</span>
            <button
              className="delete-button"
              onClick={() => deleteButton(index)}
            >
              ❌
            </button>
            <button className="done-button" onClick={() => doneButton(index)}>
              👍
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
