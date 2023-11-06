import {  Row, Col, Card } from "react-bootstrap";
import './favourite.css'
function Favourite() {
    return (
        <>
            <div className='banner_favourite'>
                <h1>Favourite</h1>
            </div>

            <div className="container">
                <Row className="h-30">
                    <Col xs={3} className="mt-2 mb-2 text-center h-50 item">
                        <div className="delete_button" typeof="submit"><i class="bi bi-x-lg"></i></div>
                        <Card>
                            <Card.Img variant="top" src="./images/product1.jfif" alt="product-img" height={"300px"} loading="lazy" />
                            <Card.Title>The Coffe</Card.Title>
                        </Card>
                    </Col>
                    <Col xs={3} className="mt-2 mb-2 text-center h-50 item">
                        <div className="delete_button" typeof="submit"><i class="bi bi-x-lg"></i></div>
                        <Card>
                            <Card.Img variant="top" src="./images/product1.jfif" alt="product-img" height={"300px"} loading="lazy" />
                            <Card.Title>The Coffe</Card.Title>
                        </Card>
                    </Col>
                    <Col xs={3} className="mt-2 mb-2 text-center h-50 item">
                        <div className="delete_button" typeof="submit"><i class="bi bi-x-lg"></i></div>
                        <Card>
                            <Card.Img variant="top" src="./images/product1.jfif" alt="product-img" height={"300px"} loading="lazy" />
                            <Card.Title>The Coffe</Card.Title>
                        </Card>
                    </Col>
                    <Col xs={3} className="mt-2 mb-2 text-center h-50 item">
                        <div className="delete_button" typeof="submit"><i class="bi bi-x-lg"></i></div>
                        <Card>
                            <Card.Img variant="top" src="./images/product1.jfif" alt="product-img" height={"300px"} loading="lazy" />
                            <Card.Title>The Coffe</Card.Title>
                        </Card>
                    </Col>
                    <Col xs={3} className="mt-2 mb-2 text-center h-50 item">
                        <div className="delete_button" typeof="submit"><i class="bi bi-x-lg"></i></div>
                        <Card>
                            <Card.Img variant="top" src="./images/product1.jfif" alt="product-img" height={"300px"} loading="lazy" />
                            <Card.Title>The Coffe</Card.Title>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    );
}
export default Favourite;