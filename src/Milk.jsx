import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";

function Milk() {
    let milkItem = useSelector(state => state.product.milk);
    let dispatch = useDispatch();

    let [filterbelow50, setFilterBelow50] = useState(false);
    let [filterAbove100, setFilterAbove100] = useState(false);

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

    return (
        <>
            <header>
                <h1>Milk Products</h1>
            </header>
            <main>
                <label>
                    <input type="checkbox" checked={filterAbove100} onChange={handleAbove100} />
                    Above 100
                </label>
                <label>
                    <input type="checkbox" checked={filterbelow50} onChange={handleBelow50} />
                    Below 50
                </label>
                <ol>
                    {filterItem.map((item, index) => (
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
