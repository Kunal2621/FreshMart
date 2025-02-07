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

    return (
        <>
        <h1>Fresh NonVeg Items Here</h1>
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
                {filterItem.map((item, index) => (
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