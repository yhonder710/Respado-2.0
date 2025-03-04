
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

interface CardInteface {
  img: string,
  title: string,
  price: number
}

export const Card: React.FC<CardInteface> = ({img, title, price}) => {
  return (
  <div className=" h-100 text-center bg-card flex flex-col justify-center items-center rounded-2xl p-[50px] gap-[5px]">
  <strong className='text-4xl'>{title}</strong>
  <img src={img} className='h-80' />
  <div className='flex gap-1 '>
  <FontAwesomeIcon icon={faStar} className='color-icon'/>
  <FontAwesomeIcon icon={faStar} className='color-icon'/>
  <FontAwesomeIcon icon={faStar} className='color-icon'/>
  <FontAwesomeIcon icon={faStar} className='color-icon'/>
  <FontAwesomeIcon icon={faStarHalfStroke} className='color-icon'/>
  </div>
  <span className='text-4xl font-black opacity-45 '>{price}$</span>
  <button className='bg-[#d9d9d96f] text-2xl border-2 border-[#32312b] rounded-2xl p-[5px] font-bold'>Comprar</button>
</div>
  )
}
