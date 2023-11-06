import { Row, Col, Image, Button } from "react-bootstrap";
import FavouriteExisted from "./favourite_existed";
import { useState } from "react";
function Product() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="container">
            <Row>
                <Col className="d-flex justify-content-center">
                    <Image src='./images/product1.jfif' height={"auto"} width={"auto"} loading="lazy"></Image>
                </Col>
                <Col>
                    <h3>Product detail</h3>
                    <h1>The Coffe</h1>
                    <h4>Description: Nice taste</h4>
                    <h4>Price: 1000$</h4>
                    <Button variant="success" >Add to cart</Button>
                    <Button variant="primary">Add to favourite</Button>
                    <div id="loading" style={{ display: "none" }}>
                    </div>
                    <FavouriteExisted
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Col>
            </Row>

        </div>
    );
}
export default Product;