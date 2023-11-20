import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ItemListContainer.css"

const ItemListContainer = ({products}) => {
    return (
        <div className='cards'>
            {products.map((product) => {
                return(
            <Card key={product.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
            );
            })}
            </div>    
        );
};

export default ItemListContainer;