import React ,{useState} from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import data from './portfolio.json';

function Portfolio() {
  const [portfolioData, setPortfolioData] = useState(data)
  return (

    <Row xs={1} md={2} className="g-4">
        {data.map((item, idx) => (
          <Col key={idx}>
    <Card className="bg-dark text-white">
      <Card.Img src={`assets/images/${item.image}`} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>     </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>))}
    </Row>
    );
        }
export default Portfolio;

    