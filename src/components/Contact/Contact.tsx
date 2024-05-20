import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Contact.css'
const Contact = () => {
  return (
    <div >
      <Form className='form'>
        <h3>Contact Us.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum incidunt consectetur quae voluptate velit, consequuntur et, ab possimus, officia asperiores blanditiis.</p>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email @gamil.com" />
        </Form.Group>

      </Row>

      <Form.Group className="mb-3" controlId="formGridMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control placeholder="Type your Message here..." />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit Message
      </Button>
    </Form>
    </div>
  )
}

export default Contact
