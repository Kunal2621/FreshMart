import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Order() {
    // Access the purchase details from the Redux store
    let order = useSelector(state => state.purchaseDetails.purchaseDetails);  // Corrected access to state

    // Ensure that order exists and contains items
    if (!order || !order.items) {
        return <p className="text-center">No items in the order.</p>;
    }

    // Map over the items in the order
    let orderItems = order.items.map((item, index) => (
        <tr key={index}>
            <td><img src={item.image} alt={item.name} className="img-fluid" style={{ maxWidth: "50px" }} /></td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.price * item.quantity}</td>
        </tr>
    ));

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Order Summary</h1>
                
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderItems}
                        </tbody>
                    </table>
                </div>
                
                <div className="text-right mt-3">
                    <p><strong>Order Date:</strong> {order.date}</p>
                    <p><strong>Total Price:</strong> ₹{order.totalprice}</p>
                </div>
            </div>
        </>
    );
}

export default Order;
