import "./Home.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Car from '../../../src/assets/Images/car4.png';
const Home = () => {
  return (
    <div id="home" className="home">
      <Row>
        <Col lg="7" md="12">
          <div className="mainContent ">
            <h1>Car Dealing Experience.</h1>
            <h3>Redefined!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates ipsum odio quos. Magni exercitationem quos perferendis
              perspiciatis dignissimos ut veritatis pariatur corporis non at!
              Minus nam excepturi amet.
            </p>
            <a href="#" className="btn">
              Explore Cars
            </a>
          </div>
        </Col>
        <Col lg="5" >
            <div className="d-flex justify-content-center align-items-center">
            <div className='homeImage'>
              <div className='Rhombus'>
                <img src={Car} alt="" />
              </div>
            </div>
            <div>
              <div className="Rhombus2"></div>
            </div>
            </div>
           
        </Col>
      </Row>
      <Row>
        <Col lg="12">
        <div id="about" className="separation1 "></div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
