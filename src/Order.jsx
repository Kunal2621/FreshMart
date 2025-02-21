import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Order() {
    // Access the purchase details from the Redux store
    let orders = useSelector(state => state.purchaseDetails.orders);

    // Ensure that orders exist and contain items
    if (!orders || orders.length === 0) {
        return <p className="text-center mt-5">No items in the order.</p>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">🛒 Your Orders</h2>

            {orders.map((order, orderIndex) => (
                <div key={orderIndex} className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title text-center mb-3">Order #{orderIndex + 1}</h5>
                        
                        {/* Table for order items */}
                        <div className="table-responsive">
                            <table className="table table-striped text-center">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Image</th>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.items.map((item, index) => (
                                        <tr key={index}>
                                            <td><img src={item.image} alt={item.name} className="img-fluid rounded" style={{ maxWidth: "50px" }} /></td>
                                            <td>{item.name}</td>
                                            <td>₹{item.price.toFixed(2)}</td>
                                            <td>{item.quantity}</td>
                                            <td><strong>₹{(item.price * item.quantity).toFixed(2)}</strong></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Order Summary at the bottom */}
                        <div className="d-flex justify-content-between mt-3 p-2 border-top">
                            <p><strong>📅 Order Date:</strong> {order.date}</p>
                            <p><strong>💰 Total Price:</strong> ₹{order.totalprice.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Order;
