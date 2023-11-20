import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import './orders.css';
import { connect } from "react-redux";
function Orders(props) {
    const order = props.state?.order;
    return (
        <>
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
                        {
                            order.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.first_name + " " + item.last_name}</td>
                                    <td>{item.total}$</td>
                                    <td>22/12/2019</td>
                                    <td className="link_detail">
                                        <Link to={`/orderdetail/${item.order_id.order_id}`} className="detail">Detail</Link></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </Table>

            </div>
            <ScrollToTop smooth color="#000" />
        </>
    );
}
const mapStateToProps = (state, ownProp) => {
    return {
        state: state.order_reducer
    }
}
export default connect(mapStateToProps, null)(Orders);