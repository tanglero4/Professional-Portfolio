import React ,{useState} from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import data from './portfolio.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Portfolio() {
  const [portfolioData, setPortfolioData] = useState(data)
  return (
<section>
    <Row xs={1} md={2} className="g-4">
        {data.map((item, idx) => (
          <Col key={idx}>
    <Card className="bg-dark text-white rounded" id='card'>
      <Card.Img src={`assets/images/${item.image}`} alt="Card image" id='project-img'/>
      <Card.ImgOverlay>
        <Card.Title><h2 id='projectName'>{item.title}</h2></Card.Title>
        <Card.Text><p>
          {item.description}</p>
        </Card.Text>
        <Card.Text> <a href='${item.link}' > Click Me</a> </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>))}
    </Row>
    </section>
    );
        }
export default Portfolio;

    