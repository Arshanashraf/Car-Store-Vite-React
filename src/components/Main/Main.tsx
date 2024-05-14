import MainContent from "./MainContent/MainContent"
import MainImage from "./mainImage/MainImage"

import './Main.css'
import Rhombus2 from "./Rhombus2/Rhombus2"
const Main = () => {
  return (
    <div id="home" className="Main">
        <MainContent/>
        <MainImage/>
        <Rhombus2/>
        <div className="row">
        <div className="col-lg-12">
          <div className="separation1 "></div>
        </div>
      </div>
    </div>
  )
}

export default Main
