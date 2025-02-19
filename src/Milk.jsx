import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState, useEffect } from "react";
import './Veg.css'; // Importing the CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for styling

function Milk() {
    const milkItems = useSelector(state => state.product.milk);
    const dispatch = useDispatch();

    // State for search and filters
    const [searchItem, setSearchItem] = useState("");
    const [filterBelow50, setFilterBelow50] = useState(false);
    const [filterAbove100, setFilterAbove100] = useState(false);
    const [filteredItems, setFilteredItems] = useState(milkItems);
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Update filteredItems whenever filters or search changes
    useEffect(() => {
        const updatedItems = milkItems.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchItem.toLowerCase());
            const matchesPrice =
                (filterBelow50 && item.price < 50) ||
                (filterAbove100 && item.price > 100) ||
                (!filterBelow50 && !filterAbove100); // If no filter, show all

            return matchesSearch && matchesPrice;
        });

        setFilteredItems(updatedItems);
        setCurrentPage(1); // Reset to first page on filter change
    }, [searchItem, filterBelow50, filterAbove100, milkItems]);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    // Handle checkbox change ensuring only one is selected at a time
    const handleBelow50Change = () => {
        if (filterBelow50) {
            setFilterBelow50(false);
        } else {
            setFilterBelow50(true);
            setFilterAbove100(false);
        }
    };

    const handleAbove100Change = () => {
        if (filterAbove100) {
            setFilterAbove100(false);
        } else {
            setFilterAbove100(true);
            setFilterBelow50(false);
        }
    };

    return (
        <div className="milk-container">
            <h1>Milk Products</h1>

            {/* Search Input & Button */}
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Search here"
                    className="form-control d-inline w-50"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                />
            </div>

            {/* Filter Checkboxes */}
            <div className="filters">
                <label className="me-3">
                    <input type="checkbox" checked={filterBelow50} onChange={handleBelow50Change} />
                    Show items below ₹50
                </label>
                <label>
                    <input type="checkbox" checked={filterAbove100} onChange={handleAbove100Change} />
                    Show items above ₹100
                </label>
            </div>

            {/* Display Filtered Items */}
            <ol className="milk-list">
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                        <li key={index} className="milk-item">
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        className="btn btn-secondary btn-sm me-2"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        className="btn btn-secondary btn-sm ms-2"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}

            {/* Footer */}
            <footer className="footer mt-4 text-center">
            <p>© 2025 Fresh Mart. All rights reserved.</p>
        <p>Contact us: <a href="KunalPrajapati2621@gmail.com">KunalPrajapati2621@gmail.com</a></p>
        <p>Call us : 6263389977</p>
            </footer>
        </div>
    );
}

export default Milk;
