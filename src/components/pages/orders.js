import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import './orders.css';
function Orders() {

    return (
        <div className="container">
            <h1 className="title_orders">Orders</h1>
            <Table className="orders_data" >
                <thead>
                    <tr style={{ backgroundColor: "#343a40" }}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Total</th>
                        <th>Date order</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>1000$</td>
                        <td>22/12/2019</td>
                        <td className="link_detail">
                            <Link to={'/orderdetail'} className="detail">Detail</Link></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>200$</td>
                        <td>22/12/2019</td>
                        <td className="link_detail">
                            <Link to={'/orderdetail'} className="detail">Detail</Link></td>
                    </tr>

                </tbody>
            </Table>

        </div>
    );
}
export default Orders;