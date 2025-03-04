import { Card } from "./components/Card.tsx"
import img from './assets/12.png'
import img2 from './assets/6.png'
import img3 from './assets/2.webp'
import img4 from './assets/3.png'

function App() {

  return (
    <>
    <main className="bg-gray-800 min-h-screen grid grid-cols-4 gap-5 p-10">
      <Card img={img} title={'Xbox'} price={290}/>
      <Card img={img2} title={'PS5'} price={40}/>
      <Card img={img3} title={'PC Gamer'} price={500}/>
      <Card img={img4} title={'PS2'} price={1000}/>
    </main>
    </>
  )
}

export default App
