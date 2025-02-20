import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrement, increment, remove, setPurchaseDetails } from "./store";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
    let cart = useSelector(state => state.cart);
    let dispatch = useDispatch();

    let totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    let [discount, setDiscount] = useState(0);
    let discountPrice = totalPrice * discount / 100;
    let [couponCode, setCouponCode] = useState('');
    let [couponPercentage, setCouponPercentage] = useState(0);
    let [couponState, setCouponState] = useState(false);

    let handleCouponPercentage = () => {
        switch (couponCode.toUpperCase()) {
            case 'RATAN10': setCouponPercentage(10); break;
            case 'RATAN20': setCouponPercentage(20); break;
            case 'RATAN30': setCouponPercentage(30); break;
            default: alert("Invalid Code"); break;
        }
    };

    let couponDiscountAmount = totalPrice * couponPercentage / 100;
    let finalItem = totalPrice - discountPrice - couponDiscountAmount;

    const handleCompletePurchase = () => {
        const purchaseDate = new Date().toDateString();
        let purchaseDetails = { items: [...cart], totalprice: finalItem, date: purchaseDate };
        dispatch(setPurchaseDetails(purchaseDetails));
        dispatch(clearCart());
    };

    return (
        <div className="container mt-4">
            {cart.length > 0 ? (
                <div className="row">
                    <div className="col-md-8">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {cart.map((item, index) => (
                                <div className="col" key={index}>
                                    <div className="card h-100 shadow-sm border-0 rounded-4">
                                        <img src={item.image} className="card-img-top rounded-top-4" alt={item.name} style={{ height: "180px", objectFit: "cover" }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title fw-bold">{item.name}</h5>
                                            <p className="card-text text-muted">${item.price}</p>
                                            <div className="btn-group" role="group">
                                                <button className="btn btn-outline-success" onClick={() => dispatch(increment(item))}>+</button>
                                                <span className="px-2">{item.quantity}</span>
                                                <button className="btn btn-outline-warning" onClick={() => dispatch(decrement(item))}>-</button>
                                            </div>
                                        </div>
                                        <div className="card-footer bg-white border-0 text-center">
                                            <button className="btn btn-outline-danger w-75" onClick={() => dispatch(remove(item))}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-4 bg-light border rounded-4 shadow-sm sticky-top">
                            <h4 className="fw-bold">Cart Summary</h4>
                            <p>Total Price: <strong>${totalPrice}</strong></p>

                            {discountPrice > 0 && (
                                <div className="alert alert-info">
                                    <p>Discount: {discount}%</p>
                                    <p>Discount Amount: ${discountPrice}</p>
                                </div>
                            )}

                            <h5 className="text-success">Final Amount: ${finalItem}</h5>

                            <div className="d-grid gap-2 mb-3">
                                <button className="btn btn-outline-primary" onClick={() => setDiscount(10)}>10% Off</button>
                                <button className="btn btn-outline-secondary" onClick={() => setDiscount(20)}>20% Off</button>
                                <button className="btn btn-outline-success" onClick={() => setDiscount(30)}>30% Off</button>
                            </div>

                            <div className="input-group mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={couponCode} 
                                    onChange={(e) => setCouponCode(e.target.value)} 
                                    placeholder="Enter coupon code" 
                                />
                                <button className="btn btn-info" onClick={() => { handleCouponPercentage(); setCouponState(true); }}>Apply</button>
                            </div>

                            <button className="btn btn-dark w-100" onClick={handleCompletePurchase}>
                                Complete Purchase
                            </button>

                            {couponState && (
                                <div className="alert alert-success mt-3">
                                    <p>Coupon Code: {couponCode}</p>
                                    <p>Coupon Discount: ${couponDiscountAmount}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="alert alert-warning text-center">Your cart is currently empty!</div>
            )}
        </div>
    );
}

export default Cart;
