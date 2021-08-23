import React from 'react';
import { TodoForm } from './components/TodoForm';
import { useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';
import useFetch from 'use-http'
import { TodoFooter } from './components/TodoFooter';
function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const addHandler = (title: string) => {
    if (title !== "") {
      const newTodo: ITodo = {
        title: title,
        id: Date.now(),
        completed: false
      }
      setTodos(prev => [newTodo, ...prev])
    }
  }
  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo

    }))
  }
  const editHandler = (title: string, id: number) => {
   console.log(title);
   setTodos(prev => prev.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        title: title
      }
    }

    return todo

  }))
  }

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm("Are you sure want to delete the item?");
    if (shoudRemove === true) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
  const onClearCompleted = () => {
    const nocomplArr = todos.filter((todo) => todo.completed)
    if (nocomplArr.length !== 0) {
      const shoudRemove = window.confirm("Are you you want to delete the items?");
      if (shoudRemove === true) {
        setTodos(todos.filter((todo) => !todo.completed))
      }
    }
  }
  return <>
    <div className="container">
      <TodoForm onAdd={addHandler} />

      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
        onEdit={editHandler}
      />
      <TodoFooter
        todos={todos}
        onClearCompleted={onClearCompleted}
      />
    </div>
  </>
}

export default App;
