import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const countIncremeta = () => {
    setCount(count + 1)
  }

  const countDecrementa = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
  }


  return (
    <>
    <main className="bg-gray-900 min-h-screen text-white grid place-content-center">
      <div className="bg-[#578E7E] border-4 border-[#FFFAEC] w-150 h-100 rounded-4xl p-10 text-center">
        <p className="bg-[#f8f0db] text-gray-900 text-6xl border-2 border-green-950 rounded-2xl py-10">{count}</p>
        <div className="flex justify-center items-center mt-20 gap-30">
          <button onClick={countDecrementa} className="bg-green-800 w-20 h-20 font-bold text-4xl border-2 rounded-2xl cursor-pointer hover:bg-green-900">-1</button>
          <button onClick={countIncremeta} className="bg-green-800 w-20 h-20 font-bold text-4xl border-2 rounded-2xl cursor-pointer hover:bg-green-900">+1</button>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
