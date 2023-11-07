import { Row, Col, Image, Button, Tab, Tabs } from "react-bootstrap";
import FavouriteExisted from "./favourite_existed";
import { useState } from "react";
import './product.css';
function Product() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="container pt-5">
            <Row>
                <Col xs={1}>
                    <div className="image_group d-flex flex-column justify-content-between">
                        <img src='./images/beans1.jpg' alt="pic" width={90} height={90} />
                        <img src='./images/beans1.jpg' alt="pic" width={90} height={90} />
                        <img src='./images/beans1.jpg' alt="pic" width={90} height={90} />
                    </div>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Image src='./images/beans1.jpg' height={450} width={450} loading="lazy"></Image>
                </Col>
                <Col className="detail_product1">
                    <h1>The Coffee Beans</h1>
                    <div><span className="detail_product-title">Price: </span>
                        <span className="price">1000$</span></div>
                    <div><span className="detail_product-title">Rate: </span>
                        <div className="stars-outer">
                        </div>
                    </div>

                    <div>
                        <p className="text-start">
                            Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum nonum eirmod dolor.
                            <br />
                            <br />
                            Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt labore et dolore magna aliquyam.erat, sed diam voluptua. At vero accusam et justo duo dolores et ea rebum. Stet clitain vidunt ut labore eirmod tempor invidunt magna aliquyam. Stet clitain vidunt ut labore.</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <Button variant="success add_to_cart" ><i className="bi bi-cart"></i><span style={{ paddingLeft: "10px" }}>Add to cart</span></Button><span><i className="bi bi-heart-fill add-to-favourite"></i></span>
                    </div>
                    <div id="loading" style={{ display: "none" }}>
                    </div>
                    <FavouriteExisted
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Col>
            </Row>
            <Tabs
                defaultActiveKey="home"
                className="mb-3 tab"
                fill
            >
                <Tab eventKey="home" title="Description">
                    <p>
                        Dicta sunt explicabo. Nemo enim ipsam voluptatem
                        voluptas sit odit aut fugit, sed quia consequuntur.
                        Lorem ipsum dolor. Aquia sit amet, elitr, sed diam nonum
                        eirmod tempor invidunt labore et dolore magna aliquyam.erat,
                        sed diam voluptua. At vero accusam et justo duo dolores et ea rebum.
                        Stet clitain vidunt ut labore eirmod tempor invidunt magna aliquyam.
                        <br />
                        Aquia sit amet, elitr, sed diam nonum eirmod
                        tempor invidunt labore et dolore magna aliquyam.erat,
                        sed diam voluptua. At vero accusam et justo duo dolores
                        et ea rebum. Stet clitain vidunt ut labore eirmod tempor
                        invidunt magna aliquyam.
                        Stet clitain vidunt ut labore.
                    </p>
                </Tab>
                <Tab eventKey="profile" title="Reviews">
                    <p>There are no reviews yet.</p>
                </Tab>
            </Tabs>
            <Row className="related_products">
                <h1>Related products</h1>
                <Col xs={4} className="producti">
                    <img src='./images/beans1.jpg' alt="pic" width={360} height={360} />
                    <span>Coffee beans 1</span>
                    <span>1000$</span>
                </Col>
                <Col xs={4}  className="producti">
                    <img src='./images/beans1.jpg' alt="pic" width={360} height={360} />
                    <span>Coffee beans 1</span>
                    <span>1000$</span>
                </Col>
                <Col xs={4} className="producti">
                    <img src='./images/beans1.jpg' alt="pic" width={360} height={360} />
                    <span>Coffee beans 1</span>
                    <span>1000$</span>
                </Col>
            </Row>
        </div>
    );
}

export default Product;