import data from "../data/scifi.json"
import Card from 'react-bootstrap/Card';
const AllTheBooks = () => {
    return (
      data.map((book) => {
        return (
        <Card style={{width: "10%"}}>
          <Card.Img variant="top" key={`book-${book.asin}`} src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>)}))
}

export default AllTheBooks
