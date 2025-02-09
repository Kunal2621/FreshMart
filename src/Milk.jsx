import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";

function Milk() {
    let milkItem = useSelector(state => state.product.milk);
    let dispatch = useDispatch();

    let [filterbelow50, setFilterBelow50] = useState(false);
    let [filterAbove100, setFilterAbove100] = useState(false);
    const [searchItem,setSearchItem]=useState("");
    const[filteredItems,setFilteredItems]=useState(milkItem);

    const handleBelow50 = () => {
        setFilterBelow50(!filterbelow50);
        setFilterAbove100(false);
    };
    const handleAbove100 = () => {
        setFilterAbove100(!filterAbove100);
        setFilterBelow50(false);
    };

    const filterItem = milkItem.filter(item => {
        if (filterbelow50) return item.price < 50;
        if (filterAbove100) return item.price > 100;
        return true;
    });

      // Handle search button click
      const handleSearch = () => {
        const updatedItems = milkItem.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchItem.toLowerCase());
            const matchesPrice =
                (filterbelow50 && item.price < 50) ||
                (filterAbove100 && item.price > 100) ||
                (!filterAbove100 && !filterbelow50); // If no filter, show all

            return matchesSearch && matchesPrice;
        });

        setFilteredItems(updatedItems);
    };

    return (
        <>
            <header>
                <h1>Milk Products</h1>
            </header>
            <main>
             
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


                <label>
                    <input type="checkbox" checked={filterAbove100} onChange={handleAbove100} />
                    Above 100
                </label>
                <label>
                    <input type="checkbox" checked={filterbelow50} onChange={handleBelow50} />
                    Below 50
                </label>
                <ol>
                    {filteredItems.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                            {item.name} - {item.price}Rs  
                            <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
                        </li>
                    ))}
                </ol>
            </main>
            <footer>
                <p>&copy; 2025 Dairy Products. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Milk;
