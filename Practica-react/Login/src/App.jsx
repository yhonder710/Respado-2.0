import { useState } from "react"


function App() {
  const [value, setValue] = useState('')


  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(value)
  }

  const handleChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  return (
    <div className="bg-gray-900 min-h-screen pt-10">
      <h1 className="text-6xl font-bold text-white text-center">Login</h1>
      <form onSubmit={handleSubmit} className="mt-10 flex flex-col justify-center items-center gap-5">
        <input onChange={handleChange} value={value} type="text" placeholder="Name" className="border-white border-2 outline-none text-white pl-2"/>
        <input type="email" placeholder="Email" className="border-white border-2 outline-none text-white pl-2"/>
        <input type="password" placeholder="Password" className="border-white border-2 outline-none text-white pl-2"/>
        <button type="submit" className="border-2 p-1 text-white cursor-pointer">LOGIN</button>
      </form>
    </div>
  )
}

export default App
