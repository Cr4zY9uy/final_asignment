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
                    <h4 className='sumary_title'>Billing Infomation</h4>
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
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Payment method</Form.Label>
                        <Row>
                            <Col>
                                <div className='credit'><div><i className="bi bi-credit-card-2-back-fill"></i><span>Credit Card</span></div><i className="bi bi-check2-circle"></i></div>
                            </Col>
                            <Col>
                                <div className='paypal active'><div><i className="bi bi-paypal"></i><span>Paypal</span></div><i className="bi bi-check2-circle"></i></div>
                            </Col>
                            <Col>
                                <div className='cod'><div><i className="bi bi-wallet-fill"></i><span>COD</span></div><i className="bi bi-check2-circle"></i></div>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group style={{ paddingTop: "20px" }}>
                        <Form.Label>Shipping method</Form.Label>
                        <Row>
                            <Col>
                                <div className='free'><div><i className="bi bi-envelope-fill"></i><span>Free</span></div><i className="bi bi-check2-circle"></i></div>
                            </Col>
                            <Col>
                                <div className='standard active'><div><i className="bi bi-archive-fill"></i><span>Standard</span></div><i className="bi bi-check2-circle"></i></div>
                            </Col>
                            <Col>
                                <div className='express'><div><i className="bi bi-send-fill"></i><span>Express</span></div><i className="bi bi-check2-circle"></i></div>
                            </Col>
                        </Row>
                    </Form.Group>

                </Form>
                <Thanks status={isModalOpen} />
                <div className="bill_detail">
                    <div className='order_info'>
                        <h4 className='sumary_title'>Order Information</h4>
                        <div className='sumary_product'>
                            <div className='product_summary'><div className='pic'><img src="./images/beans1.jpg" height="60px" width="60px" alt='product_image' /><span>x1</span></div><span>1000$</span></div>
                            <div className='product_summary'><div className='pic'><img src="./images/beans1.jpg" height="60px" width="60px" alt='product_image' /><span>x1</span></div><span>1000$</span></div>
                            <div className='product_summary'><div className='pic'><img src="./images/beans1.jpg" height="60px" width="60px" alt='product_image' /><span>x1</span></div><span>1000$</span></div>
                        </div>
                    </div>
                    <div className='order_sumary'>
                        <h4 className='sumary_title'>Order Summary</h4>
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
                        <div className="tax_bill d-flex justify-content-between pt-2 pb-2">
                            <h5>Tax</h5><span id="shipping">10$</span></div>
                        <div className="total_bill d-flex justify-content-between align-items-center">
                            <h3>Total</h3><span id="total" className="flex">1010$</span>
                        </div>
                        <Button variant='outline-success' onClick={showModal}>
                            Place order
                        </Button>
                    </div>
                </div>

            </div >
        </section >

    );
}
export default Checkout;