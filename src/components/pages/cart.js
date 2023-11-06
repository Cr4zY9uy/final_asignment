import './cart.css';
function Cart() {
    return (
        <div className="container mt-4 d-flex flex-column" >
            <div className="row  d-flex justify-content-between" id="shopping">
                <div className="col-7 product">
                    <h3 className="title">Cart</h3>
                    <table id="shopping-products-table" className="table text-center align-middle">
                        <thead>
                            <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Thumbnail</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="productShop">
                            <tr >
                                <td>1</td>
                                <td><img src='./images/product1.jfif' width={"120px"} height={"180px"} alt="Product thumbnail" /></td>
                                <td>The Cofffe</td>
                                <td>1000$</td>
                                <td>1</td>
                                <td>1000$</td>
                                <td><i className="bi bi-x-lg delete_cart"></i></td>
                            </tr>
                            <tr >
                                <td>1</td>
                                <td><img src='./images/product1.jfif' width={"120px"} height={"180px"} alt="Product thumbnail" /></td>
                                <td>The Cofffe</td>
                                <td>1000$</td>
                                <td>1</td>
                                <td>1000$</td>
                                <td><i className="bi bi-x-lg delete_cart"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-4 invoice">
                    <h3 style={{ paddingBottom: 32 }}>Cart total</h3>
                    <hr />
                    <div className="subTotal d-flex justify-content-between">
                    <h5>Subtotal</h5>
                    </div> <br />

                    <div style={{ display: "flex", justifyContent: "space-between",paddingTop: "5px" }}><span>The coffee</span><span>1000$</span></div>
                    <div style={{ display: "flex", justifyContent: "space-between",paddingTop: "5px"  }}><span>The coffee</span><span>1000$</span></div>
                    <div style={{ display: "flex", justifyContent: "space-between",paddingTop: "5px" }}><span>The coffee</span><span>1000$</span></div>
                    <div style={{ textAlign: "right", paddingTop: "10px" }}>1000$
                    </div>
                    <hr />
                    <div className="shipping d-flex justify-content-between">
                        <h5>Shipping</h5><span id="shipping">10$</span></div>
                    <hr />
                    <div className="total d-flex justify-content-between align-items-center">
                        <h3>Total</h3><span id="total" className="flex">1010$</span></div>
                    <button type="button" className="btn btn-danger mt-4">Proceed to checkout</button>
                </div>
            </div>


        </div>
    );
}
export default Cart;