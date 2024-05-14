import Car from '../../../assets/Images/car4.png';
import './MainImage.css'
const MainImage = () => {
  return (
    <div className='mainImage'>
      <div className='rhombus'>
        <img src={Car} alt="" />
      </div>
    </div>
  )
}

export default MainImage
