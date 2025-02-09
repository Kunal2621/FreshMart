import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";

function NonVeg(){
    let nonVegItems =useSelector(state=>state.product.nonVeg);
    let dispatch =useDispatch();

        // let finalItems=nonVegItems.map((item,index)=>(
        //     <li key={index}>
        //         {item.name}--{item.price}Rs
        //         <button onClick={()=>dispatch(addToCart(item))}>AddToCart</button>
        //     </li>
        // ))
       // State for filters
        let [filterBelow100,setFilterBelow100]=useState(false);
        let [filterAbove200,setFilterAbove200]=useState(false);

        // for search bar

        const [searchItem,setSearchItem]=useState("");
        const [filteredItems,setFilteredItems]=useState(nonVegItems);
        //check krenga agr ek check hai to dusare ko uncheck krenga
        const hendleBelow100=()=>{
                setFilterBelow100(!filterBelow100);
                setFilterAbove200(false);   
        }
        const handleAbove200=()=>{
            setFilterAbove200(!filterAbove200);
            setFilterBelow100(false);
        }
        // filter logic 
        const filterItem =nonVegItems.filter(item=>{
            if(filterAbove200) return item.price>200;
            if(filterBelow100) return item.price<100;
            return true
        }
        )


        // Handle search button click
    const handleSearch = () => {
        const updatedItems = nonVegItems.filter(item => {
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
        <>
        <h1>Fresh NonVeg Items Here</h1>
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
        <input type="checkbox" checked={filterBelow100} onChange={hendleBelow100}  />
        show Below 100
        </label>
        <label>
        <input type="checkbox" checked={filterAbove200} onChange={handleAbove200} />
        show above 200
        </label>
        {/* Display Filtered Items */}
        <ol>
                {filteredItems.map((item, index) => (
                    <li key={index}>
                          <img src={item.image} alt={item.name} />
                        {item.name} - {item.price}Rs  
                        <button onClick={() => dispatch(addToCart(item))}>AddToCart</button>
                    </li>
                ))}
            </ol>
        </>
    )
}
export default NonVeg;