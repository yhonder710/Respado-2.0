import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard,faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export const Botton = () => {
  const [comprar, setComprar] = useState(false)

  const handleClick = () => {
    setComprar(!comprar)
  }

  const text = comprar ? 'Comprado' : 'Comprar'
  const icon = comprar ? faMoneyBill1 : faCreditCard

    return (
     <button onClick={handleClick} className="bg-[#2C3930] hover:bg-[#212c25] transition flex justify-center items-center gap-3 border-4 border-[#DCD7C9] text-[#DCD7C9] p-2 px-4 text-3xl font-bold rounded-2xl cursor-pointer">
      {text} <FontAwesomeIcon icon={icon} className='icon'/>
    </button>
     )
}
