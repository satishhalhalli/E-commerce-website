import React from 'react';
import { Card, Col, Container, Row, Button} from 'react-bootstrap';
const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const Products = () => {
  return (
    <Container className="music" style={{ maxWidth: '900px', margin: '0 auto',textAlign:'center' }}>
    <h2>MUSIC</h2>
    <Container fluid style={{ maxWidth: '50%' }}>
    <Row xs={1} md={2} lg={2} className="g-3">
      {productsArr.map((product, index) => (
        <Col key={index}>
          <Card>
            <Card.Img variant="top" src={product.imageUrl} style={{ maxWidth: '100%' }} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  </Container>
  );
};

export default Products;
