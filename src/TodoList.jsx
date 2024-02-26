import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';
import {v4 as uuid} from 'uuid'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

const initialTodos = [
    {id: uuid(), text: "walk the dog", completed: false},
    {id: uuid(), text: "take out garbage", completed: true},
    {id: uuid(), text: "wash dishes", completed: false},
    {id: uuid(), text: "vaccum", completed: false}
]

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"))
  if (!data) return []
  return data
}

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    setTodos(currTodos => {
      return currTodos.map(todo => {
        if (todo.id === id){
          return {...todo, completed: !todo.completed}
        } else {
          return todo
        }
      })
    })
  }

  function deleteTodo(id){
    setTodos(currTodos => {
       return currTodos.filter(todo => todo.id !== id)
    })
  }

  function addTodo(text){
    setTodos(currTodos => {
      return [...currTodos, {id: uuid(), text: text, completed:false}]
    })
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3
      }}
    >
      <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
              Todos
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => (
          <TodoListItem 
            key={todo.id} 
            todo={todo} 
            deleteTodo={() => deleteTodo(todo.id)} 
            toggleTodo={() => toggleTodo(todo.id)}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
      </List>
    </Box> 
  )
}