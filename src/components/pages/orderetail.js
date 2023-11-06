import { Table } from "react-bootstrap";
import './orderdetail.css';
function OrdersDetail() {

    return (
        <section className="container">
            <h1>Order detail</h1>
            <table className="infor_orderdetail">
                <tbody>
                    <tr>
                        <td className="title_info ">Username:</td>
                        <td className="infor_detail ">David James</td>
                    </tr>
                    <tr>
                        <td className="title_info ">Email: </td>
                        <td className="infor_detail ">jame@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="title_info ">Birthday:</td>
                        <td className="infor_detail ">D11/22/2001</td>
                    </tr>
                    <tr>
                        <td className="title_info ">Address:</td>
                        <td className="infor_detail ">Kentucky, the US</td>
                    </tr>
                    <tr>
                        <td className="title_info ">Payment method:</td>
                        <td className="infor_detail ">Credit card</td>
                    </tr>
                </tbody>
            </table>
            <Table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>QTY</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td><img src='./images/product1.jfif' width={"120px"} height={"180px"} alt="product" /></td>
                        <td>1</td>
                        <td>1000$</td>
                        <td>1000$</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jac</td>
                        <td><img src='./images/product1.jfif' width={"120px"} height={"180px"} alt="product" /></td>
                        <td>2</td>
                        <td>1000$</td>
                        <td>1000$</td>
                    </tr>
                </tbody>
            </Table>
        </section>
    );
}
export default OrdersDetail;