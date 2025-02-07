import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLeaf, FaFish, FaCheese, FaShoppingCart, FaTruck, FaStar } from "react-icons/fa";

function About() {
    return (
        <div className="container mt-5">
            {/* Header Section */}
            <div className="text-center mb-5">
                <h1 className="fw-bold text-dark">About Fresh Food Mart</h1>
                <p className="text-secondary">Your one-stop destination for high-quality and fresh food products.</p>
            </div>

            {/* Introduction Section */}
            <div className="row mb-5">
                <div className="col-md-12">
                    <h2 className="text-primary">Who We Are</h2>
                    <p className="text-dark">
                        At <strong>Fresh Food Mart</strong>, we are committed to delivering **fresh and high-quality food items** 
                        right to your doorstep. Our range includes **vegetables, dairy products, meat and seafood, 
                        groceries, and bakery essentials**. We prioritize freshness, quality, and customer satisfaction.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="bg-light p-4 rounded shadow mb-5">
                <h2 className="text-center text-dark">Our Mission</h2>
                <p className="text-center text-dark">
                    To provide **fresh, organic, and high-quality** food products while maintaining the highest standards of 
                    hygiene, sustainability, and customer convenience.
                </p>
            </div>

            {/* Food Categories Section */}
            <h2 className="text-center text-dark">Our Products</h2>
            <div className="row text-center">
                <div className="col-md-4">
                    <FaLeaf className="text-dark fs-1 mb-2" />
                    <h5 className="text-dark">Fresh Vegetables</h5>
                </div>
                <div className="col-md-4">
                    <FaCheese className="text-dark fs-1 mb-2" />
                    <h5 className="text-dark">Dairy Products</h5>
                </div>
                <div className="col-md-4">
                    <FaFish className="text-dark fs-1 mb-2" />
                    <h5 className="text-dark">Meat & Seafood</h5>
                </div>
                <div className="col-md-4 mt-4">
                    <FaShoppingCart className="text-dark fs-1 mb-2" />
                    <h5 className="text-dark">Groceries & Staples</h5>
                </div>
                <div className="col-md-4 mt-4">
                    <FaStar className="text-dark fs-1 mb-2" />
                    <h5 className="text-dark">Bakery & Beverages</h5>
                </div>
                <div className="col-md-4 mt-4">
                    <FaTruck className="text-dark fs-1 mb-2" />
                    <h5 className="text-dark">Fast Delivery</h5>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-light text-dark p-4 rounded shadow mt-5">
                <h2 className="text-center">Why Choose Fresh Food Mart?</h2>
                <ul className="list-unstyled text-center">
                    <li className="text-dark">✔ 100% Fresh & Quality Products</li>
                    <li className="text-dark">✔ Ethically Sourced & Hygienic</li>
                    <li className="text-dark">✔ Quick & Hassle-Free Delivery</li>
                    <li className="text-dark">✔ Affordable Prices & Discounts</li>
                    <li className="text-dark">✔ Excellent Customer Support</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
