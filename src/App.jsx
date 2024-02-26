import { useState } from 'react'
import { CssBaseline } from '@mui/material'
import TodoList from './TodoList.jsx'
import Navbar from './Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </>
  )
}

export default App
