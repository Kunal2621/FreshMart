import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import './Veg.css'; // Importing the CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for styling

function Veg() {
    const vegItems = useSelector(state => state.product.veg);
    const dispatch = useDispatch();

    // State for search and filters
    const [searchItem, setSearchItem] = useState("");
    const [filterBelow100, setFilterBelow100] = useState(false);
    const [filterAbove200, setFilterAbove200] = useState(false);
    const [filteredItems, setFilteredItems] = useState(vegItems);

    // Handle checkbox change
    const handleBelow100Change = () => {
        setFilterBelow100(!filterBelow100);
        setFilterAbove200(false); // Reset other filter
    };

    const handleAbove200Change = () => {
        setFilterAbove200(!filterAbove200);
        setFilterBelow100(false); // Reset other filter
    };

    // Handle search button click
    const handleSearch = () => {
        const updatedItems = vegItems.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchItem.toLowerCase());
            const matchesPrice =
                (filterBelow100 && item.price < 100) ||
                (filterAbove200 && item.price > 200) ||
                (!filterBelow100 && !filterAbove200); // If no filter, show all

            return matchesSearch && matchesPrice;
        });

        setFilteredItems(updatedItems);
    };

    return (
        <div className="veg-container">
            <h1>Fresh Vegetables</h1>

            {/* Search Input & Button */}
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Search here"
                    className="form-control d-inline w-50"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                />
                <button onClick={handleSearch} className="btn btn-primary btn-sm ms-2">
                    Search
                </button>
            </div>

            {/* Filter Checkboxes */}
            <div className="filters">
                <label className="me-3">
                    <input type="checkbox" checked={filterBelow100} onChange={handleBelow100Change} />
                    Show items below ₹100
                </label>
                <label>
                    <input type="checkbox" checked={filterAbove200} onChange={handleAbove200Change} />
                    Show items above ₹200
                </label>
            </div>

            {/* Display Filtered Items */}
            <ol className="veg-list">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <li key={index} className="veg-item">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Price: ₹{item.price}</p>
                            <button onClick={() => dispatch(addToCart(item))} className="btn btn-success btn-sm">
                                Add to Cart
                            </button>
                        </li>
                    ))
                ) : (
                    <p className="text-danger">No items found.</p>
                )}
            </ol>
        </div>
    );
}

export default Veg;
