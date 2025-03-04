import { useCatFact } from "./hook/refreshFact.js"
import { useCatImage } from "./hook/useCatImage.js"
import { Otro } from "./components/Otro.jsx"


//custom hooks
//sirve para reutilizar la logica en los proyectos

function App() {
  const { fact, refreshRandomFact} = useCatFact()
  const { imageUrl } = useCatImage({ fact })


  //los useEffect sirven para ejecutar un codigo condicional

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main className="bg-gray-900 min-h-screen text-white flex flex-col justify-center items-center text-center gap-5">
      <h1 className="text-7xl font-bold mb-10">App de gatitos</h1>
      <button onClick={handleClick} className="border-2 border-white p-2 cursor-pointer bg-amber-500">Otro fact</button>
      <p>{fact}</p>
      <img src={imageUrl} alt={`Image extracted using the first rhee words for ${fact}`} className="max-w-150 h-100"/>

      <Otro/>
    </main>
  )
}

export default App
