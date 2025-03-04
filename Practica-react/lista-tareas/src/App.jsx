import { useEffect } from "react"
import { useState } from "react"
import { Tarea } from "./components/Tarea.jsx"

function App() {

  const [items, setItems] = useState(() => {
    const taskFromStorage = window.localStorage.getItem('Datos')
    return taskFromStorage ? JSON.parse(taskFromStorage) : []
  })
  const [task, setTask] = useState('')
  const [contador, setContador] = useState(0)


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const newTask = e.target.value
    setTask(newTask)
  }

  const handleAdd = () => {
    if (task.length > 0) {
      setItems([...items, task])
      setTask('')
    }
  }

  useEffect(() => {
    setContador(items.length)
  },[items])

  useEffect(() => {
    window.localStorage.setItem('Datos', JSON.stringify(items))
  },[contador,items])


  const deleteItems = (index) => {
    const newItems = items.filter((_, i) => i !== index)
    setItems(newItems)
  }


  return (
    <main className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-2xl text-white gap-10 pt-10">
      <h2>Tareas pendientes: {contador}</h2>
      <form className="flex gap-5 w-100" onSubmit={handleSubmit}>
        <input className="border-2" onChange={handleChange} value={task}/>
        <button onClick={handleAdd} type="submit">Agregar</button>
      </form>
      {
        items.map((item, index) => (
          <Tarea key={index} index={index} item={item} deleteItems={deleteItems}/>
        ))
      }
    </main>
  )
}

export default App
