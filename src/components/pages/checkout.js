import './checkout.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Thanks from './thanks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Checkout() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const showModal = () => {
        setIsModalOpen(true);
        setTimeout(() => {
            setIsModalOpen(false);
            navigate('/');
        }, 2000);
    };
    return (
        <section className='container'>
            <h1 className="checkout_title pb-3">Checkout</h1>
            <div className='d-flex justify-content-between'>
                <Form className='bill'>
                    <h4 className='sumary_title'>Order Infomation</h4>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Payment method</Form.Label>
                        <Row>
                            <Col>
                                <div className='credit'><div><i className="bi bi-credit-card-2-back-fill"></i><span>Credit Card</span></div><i class="bi bi-check2-circle"></i></div>
                            </Col>
                            <Col>
                                <div className='paypal active'><div><i className="bi bi-paypal"></i><span>Paypal</span></div><i class="bi bi-check2-circle"></i></div>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Owner's Card</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">

                        <Row>
                            <Col>
                                <Form.Label>Expiration date</Form.Label>
                                <Form.Control />
                            </Col>
                            <Col><Form.Label>CVV</Form.Label>
                                <Form.Control />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className='d-flex'>
                        <Button variant="primary" type="button" className='pay' onClick={showModal}>
                            Pay
                        </Button>
                    </Form.Group>
                </Form>
                <Thanks status={isModalOpen} />
                <div className="col-4 bill_detail">
                    <h4 className='sumary_title'>Order Sumary</h4>
                    <div className="subTotal_bill d-flex justify-content-between">
                        <h5>Subtotal</h5>
                    </div>
                    <div className='sumary_product'>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "5px" }}><span>The coffee</span><span>1000$</span></div>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "5px" }}><span>The coffee</span><span>1000$</span></div>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "5px" }}><span>The coffee</span><span>1000$</span></div>
                        <div style={{ textAlign: "right", paddingTop: "5px" }}><span>1000$</span></div>
                    </div>
                    <div className="shipping_bill d-flex justify-content-between pt-2 pb-2">
                        <h5>Shipping</h5><span id="shipping">10$</span></div>
                    <div className="total_bill d-flex justify-content-between align-items-center">
                        <h3>Total</h3><span id="total" className="flex">1010$</span></div>
                </div>
            </div >
        </section >

    );
}
export default Checkout;