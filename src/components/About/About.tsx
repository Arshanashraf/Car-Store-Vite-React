import Carousel from "react-bootstrap/Carousel";
import Car1 from "../../assets/Images/car1.jpg";
import Car2 from "../../assets/Images/car2.jpg";
import Car3 from "../../assets/Images/car3.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <Row>
        <Col lg="6" >
          <div className="aboutContent">
          <h1>Car Dealing Experience.</h1>
          <h3>About Us.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            eos, ipsam molestiae aliquid nulla rem suscipit dolorum iusto ipsum.
            Sunt eos maiores recusandae cumque, dignissimos ipsa at voluptatum
            alias nemo.
          </p>
          </div>
          
        </Col>
        <Col lg="6" md="12" className="car-slider ">
          <Carousel className="carousel">
            <Carousel.Item className="slider">
              <img src={Car1} />
              <Carousel.Caption>
                <h3>AUDI</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider">
              <img src={Car2} />
              <Carousel.Caption>
                <h3>BMW</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider">
              <img src={Car3} />
              <Carousel.Caption>
                <h3>ROLLS ROYCE</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <div className="row">
        <div className="col-lg-12">
          <div className="separation2"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
