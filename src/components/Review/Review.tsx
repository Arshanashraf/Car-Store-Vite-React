import './Review.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Car1 from '../../assets/Images/car1.jpg'
import Car2 from '../../assets/Images/car2.jpg'
import Car3 from '../../assets/Images/car3.png'
import Car4 from '../../assets/Images/car8.webp'
import Car5 from '../../assets/Images/car6.avif'
import Car6 from '../../assets/Images/car7.webp'
const Review = () => {
  return (
    <div  className="review">
      <div className="reviewContent">
        <h1>Car Dealing Experience.</h1>
        <h3>Review</h3>
      </div>
      <div className="reviewCards">
        <Row>
        <Col lg='4' md='6'>
                <div className="card1">
                    <Card className="card"style={{ width: '18rem' }}>
                        <Card.Img style={{height:'170px'}} variant="top" src={Car1} />
                        <Card.Body>
                            <Card.Title className='cardTitle'>AUDI</Card.Title>
                            <Card.Text className='carDetails'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Col>

            <Col lg='4' md='6'>
                <div className="card1">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height:'170px'}} variant="top" src={Car2} />
                        <Card.Body>
                            <Card.Title className='cardTitle'>BMW</Card.Title>
                            <Card.Text className='carDetails'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Col>

            <Col lg='4' md='6'>
                <div className="card1">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height:'170px'}} variant="top" src={Car3} />
                        <Card.Body>
                            <Card.Title className='cardTitle'>Rolls Royce</Card.Title>
                            <Card.Text className='carDetails'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Col>

            <Col lg='4' md='6'>
                <div className="card1">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height:'170px'}} variant="top" src={Car4} />
                        <Card.Body>
                            <Card.Title className='cardTitle'>Ferrari</Card.Title>
                            <Card.Text className='carDetails'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Col>

            <Col lg='4' md='6'>
                <div className="card1">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height:'170px'}} variant="top" src={Car5} />
                        <Card.Body>
                            <Card.Title className='cardTitle'>Bugatti</Card.Title>
                            <Card.Text className='carDetails'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Col>

            <Col lg='4' md='6'>
                <div className="card1">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height:'170px'}} variant="top" src={Car6} />
                        <Card.Body>
                            <Card.Title className='cardTitle'>Mercedes</Card.Title>
                            <Card.Text className='carDetails'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </Row>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div id='contact' className="separation3 "></div>
        </div>
      </div>
    </div>
  )
}

export default Review
