import './Footer.css'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col lg="4">
        <div className="footerInfo ">
            <h4>HeaLer </h4>
            <h5>Car Dealing Experience.</h5>
            <div className='detail'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati officiis quibusdam unde.</div>
            <div className="social-media">
            <a href="#" className='text-dark'><i className='bx bxl-twitter'></i></a>
            <a href="#" className='text-light'><i className='bx bxl-facebook'></i></a>
            <a href="#" className='text-light'><i className='bx bxl-instagram-alt' ></i></a>
        </div>
        </div>
        </Col>
        <Col lg="2">
        <div className="moreInfo">
            <h5 >Account</h5>
            <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Billing.</li>
                <li>Notifications.</li>
            </ul>

        </div>
        </Col>
        <Col lg="2">
        <div className="moreInfo">
            <h5>About</h5>
            <ul>
                <li>Services</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Career</li>
            </ul>

        </div>
        </Col>
        <Col lg="2">
        <div className="moreInfo">
            <h5>Company</h5>
            <ul>
                <li>Community</li>
                <li>Help Center</li>
                <li>Support</li>
            </ul>

        </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <div className="separation4"></div>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
        <div className="endInfo">
            <div>&copy;2024 All Rights Reserved by HeaLer.</div>
        </div>
        </Col>
        <Col lg="6">
        <div className="endInfo2">
            <div>Terms<span>-</span>Privacy Policy<span>-</span>Cokies</div>
        </div>
        </Col>
      </Row>
      <div className="row">
        
        
      </div>
    </div>
  )
}

export default Footer
