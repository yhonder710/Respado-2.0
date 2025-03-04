import { useState } from "react"

export function Tarea ({index, item, deleteItems }) {
  const [complete, setComplete] = useState(false)

  const handleClick = () => {
    setComplete(!complete)
  }

  const text = complete ? 'Completada' : 'En progreso'
  const classText = complete ? 'text is-complete' : 'text'
  const classTarea = complete ? 'tarea is-complete' : 'tarea'


  return (
    <li className="list-none w-150 flex justify-between items-center gap-15 border-2 p-3 rounded-2xl" key={index}>
      <h2 onClick={handleClick} className={classText}>{text}</h2>
    <p className={classTarea}>{item}</p>
    <button onClick={() => deleteItems(index)} className="cursor-pointer bg-indigo-600 rounded-2xl py-1 px-2">Delete</button>
  </li>
  )
}
