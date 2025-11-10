import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const hobbies = [
  { id: 1, title: 'Photography', img: 'src/photos/pexels-ozgomz-840666.jpg', desc: 'Capturing beautiful moments.' },
  { id: 2, title: 'Cooking', img: 'src/photos/pexels-cottonbro-3298637.jpg', desc: 'Experimenting with flavors.' },
  { id: 3, title: 'Traveling', img: 'src/photos/pexels-fmaderebner-238622.jpg', desc: 'Exploring new cultures and places.' },
  { id: 4, title: 'Reading', img: 'src/photos/pexels-pixabay-207662.jpg', desc: 'Diving into stories and knowledge.' },
];

const Hobbies = () => {
  return (
    <div>
      <h2 className="text-center mb-4">My Hobbies</h2>
      <Row>
        {hobbies.map((hobby) => (
          <Col md={3} key={hobby.id}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src={hobby.img} />
              <Card.Body>
                <Card.Title>{hobby.title}</Card.Title>
                <Card.Text>{hobby.desc}</Card.Text>
                <Button as={Link} to={`/hobbies/${hobby.id}`} variant="primary">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Hobbies;