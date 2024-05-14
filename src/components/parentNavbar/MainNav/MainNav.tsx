import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MainNav.css';

const MainNav = () => {
  return (
    <div >
    <>
      <Navbar className='Navbar'>
        <Container className='container'>
          <Navbar.Brand className="logo">HeaLer</Navbar.Brand>
          <Nav className="navbar me-auto">
            <Nav.Link className="nav" href="#home">Home</Nav.Link>
            <Nav.Link className="nav" href="#about">About</Nav.Link>
            <Nav.Link className="nav" href="#review">Review</Nav.Link>
            <Nav.Link className="nav" href="#contact">Contact</Nav.Link>
            <Nav.Link className="nav" href="#featured">Featured</Nav.Link>
          </Nav>
          <div className="social-media">
            <a href="#" className='text-light'><i className='bx bxl-twitter'></i></a>
            <a href="#" className='text-light'><i className='bx bxl-facebook'></i></a>
            <a href="#" className='text-light'><i className='bx bxl-instagram-alt' ></i></a>
        </div>
        </Container>
      </Navbar>
    </>


    </div>
  )
}

export default MainNav
