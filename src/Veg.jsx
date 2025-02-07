import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import './Veg.css'; // Importing the CSS file

function Veg() {
    const vegItems = useSelector(state => state.product.veg);
    const dispatch = useDispatch();

    // State for filters
    const [filterBelow100, setFilterBelow100] = useState(false);
    const [filterAbove200, setFilterAbove200] = useState(false);

    // Handle checkbox change
    const handleBelow100Change = () => {
        setFilterBelow100(!filterBelow100);
        setFilterAbove200(false); // Reset other filter
    };

    const handleAbove200Change = () => {
        setFilterAbove200(!filterAbove200);
        setFilterBelow100(false); // Reset other filter
    };

    // Filter logic
    const filteredItems = vegItems.filter(item => {
        if (filterBelow100) return item.price < 100;
        if (filterAbove200) return item.price > 200;
        return true; // Show all if no filter applied
    });
    const [searchItem,setSearchItem] =useState("");
    const [filterSearch ,setFilterSearch]=useState(vegItems);

    const handleSearch = () => {
        const found = vegItems.filter(item => 
            item.name.includes(searchItem)
        );
        setFilterSearch(found);
    };
    
    


    return (
        <div className="veg-container">
            <h1>Fresh Vegetables</h1>
           <input 
           type="text"
           placeholder="Search here"
           value={searchItem}
           onChange={(e)=>setSearchItem(e.target.value.toLowerCase())}/>
          <button onClick={handleSearch}>Search</button>

 
            {/* Filter Checkboxes */}
            <div className="filters">
                <label>
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
                {filterSearch.map((item,index) => (
                    <li key={index} className="veg-item">
                         <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Price: ₹{item.price}</p>
                       
                        <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
export default Veg;
