
import { useState } from 'react';
import { Navbar, Nav, Container, Button,Row,Col} from 'react-bootstrap';
import Cart from './Cart';

const Header = (props) => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='./index.html'>The Generics</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='./index.html'>HOME</Nav.Link>
              <Nav.Link href='#'>STORE</Nav.Link>
              <Nav.Link href='./about.html'>ABOUT</Nav.Link>
            </Nav>
            <Nav>
              <Button variant='outline-light' onClick={handleCartClick} className='cart-holder'>
                <i className='fas fa-shopping-cart'></i>
                <span className='cart-number'>Cart</span>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="header" style={{ background: '#777', color: 'white', textAlign: 'center', padding: '0 0 30px 0' }}>
        <Row>
          <Col>
            <h1 style={{ padding: '40px', fontSize: '100px', fontWeight: 'bold', margin: '0' }}>The Generics</h1>
          </Col>
        </Row>
      </Container>
      {showCart && <Cart />}
    </>
  );
};

export default Header;
