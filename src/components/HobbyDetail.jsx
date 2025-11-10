import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const hobbies = [
  { id: 1, title: 'Photography', img: 'https://picsum.photos/600/300?1', info: 'I love capturing cityscapes and sunsets.' },
  { id: 2, title: 'Cooking', img: 'https://picsum.photos/600/300?2', info: 'I enjoy trying new recipes and cuisines.' },
  { id: 3, title: 'Traveling', img: 'https://picsum.photos/600/300?3', info: 'Visiting new countries and learning about cultures.' },
  { id: 4, title: 'Reading', img: 'https://picsum.photos/600/300?4', info: 'I enjoy novels, poetry, and tech blogs.' },
];

const HobbyDetail = () => {
  const { id } = useParams();
  const hobby = hobbies.find((h) => h.id === parseInt(id));

  if (!hobby) return <p>Hobby not found!</p>;

  return (
    <div className="text-center">
      <Card className="p-3 shadow-sm">
        <Card.Img variant="top" src={hobby.img} className="rounded" />
        <Card.Body>
          <Card.Title>{hobby.title}</Card.Title>
          <Card.Text>{hobby.info}</Card.Text>
          <Button as={Link} to="/hobbies" variant="secondary">
            Back to Hobbies
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HobbyDetail;