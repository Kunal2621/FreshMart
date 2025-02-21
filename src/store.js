import { configureStore, createSlice } from "@reduxjs/toolkit";




const productSlice = createSlice({
    name: "product",
    initialState: {
        veg: [
            { name: "Potato", price: 175, image: "/VegImages/Potato.jpg" },
            { name: "Tomato", price: 75, image: "/VegImages/Tomato.jpg" },
            { name: "Carrot", price: 120, image: "/VegImages/Carrots.jpg" },
            { name: "Cabbage", price: 90, image: "/VegImages/Cabbage.jpg" },
            { name: "Capsicum", price: 200, image: "/VegImages/Capsicum.jpg" },
            { name: "Onion", price: 85, image: "/VegImages/Onion.jpg" },
            { name: "Cauliflower", price: 150, image: "/VegImages/Cauliflower.jpg" },
            { name: "Peas", price: 130, image: "/VegImages/Peas.jpg" },
            { name: "Brinjal", price: 95, image: "/VegImages/Brinjal.jpg" },
            { name: "Spinach", price: 50, image: "/VegImages/Spinach.jpg" },
            { name: "Radish", price: 80, image: "/VegImages/Radish.jpg" },
            { name: "Ginger", price: 250, image: "/VegImages/Ginger.jpg" },
            { name: "Garlic", price: 270, image: "/VegImages/Potato.jpg" },
            { name: "Pumpkin", price: 140, image: "/VegImages/Pumpkin.jpg" },
            { name: "Cucumber", price: 60, image: "/VegImages/Cucumber.jpg" },
            { name: "Bitter Gourd", price: 110, image: "/VegImages/BitterGourd.jpg" },
            { name: "Bottle Gourd", price: 100, image: "/VegImages/BottleGourd.jpg" },
            { name: "Drumstick", price: 180, image: "/VegImages/Drumstick.jpg" },
            { name: "Corn", price: 90, image: "/VegImages/Corn.jpg" },
            { name: "Ladyfinger", price: 175, image: "/VegImages/Ladyfinger.jpg" }
        ],
        nonVeg: [
            { name: "Chicken", price: 180, image: "/NonVeg/Chicken.jpg" },
            { name: "Mutton", price: 750, image: "/NonVeg/Mutton.jpg" },
            { name: "Biryani", price: 780, image: "/NonVeg/Biryani.jpg" },
            { name: "Fish", price: 150, image: "/NonVeg/Fish.jpg" },
            { name: "Prawns", price: 600, image: "/NonVeg/Chicken.jpg" },
            { name: "Crab", price: 900, image: "/NonVeg/Mutton.jpg" },
            { name: "Duck", price: 500, image: "/NonVeg/Biryani.jpg" },
            { name: "Quail", price: 250, image: "/NonVeg/Fish.jpg" },
            { name: "Goat Meat", price: 800, image: "/NonVeg/Chicken.jpg" },
            { name: "Pork", price: 650, image: "/NonVeg/Mutton.jpg" },
            { name: "Beef", price: 700, image: "/NonVeg/Biryani.jpg" },
            { name: "Turkey", price: 550, image: "/NonVeg/Fish.jpg" },
            { name: "Lobster", price: 1100, image: "/NonVeg/Chicken.jpg" },
            { name: "Squid", price: 750, image: "/NonVeg/Mutton.jpg" },
            { name: "Octopus", price: 1200, image: "/NonVeg/Biryani.jpg" },
            { name: "Shark Meat", price: 1300, image: "/NonVeg/Fish.jpg" },
            { name: "Salmon", price: 900, image: "/NonVeg/Chicken.jpg" },
            { name: "Tuna", price: 850, image: "/NonVeg/Mutton.jpg" },
            { name: "Anchovy", price: 200, image: "/NonVeg/Biryani.jpg" },
            { name: "Eel", price: 950, image: "/NonVeg/Fish.jpg" }
        ],
        milk: [
            { name: "Sanchi", price: 67, image: "/Milk/1.jpg" },
            { name: "Dudh Ganga", price: 78, image: "/Milk/2.jpg" },
            { name: "Amul", price: 78, image: "/Milk/3.jpg" },
            { name: "Mother Dairy", price: 85, image: "/Milk/1.jpg" },
            { name: "Vita", price: 75, image: "/Milk/2.jpg" },
            { name: "Paras", price: 80, image: "/Milk/3.jpg" },
            { name: "Aavin", price: 82, image: "/Milk/1.jpg" },
            { name: "Nandini", price: 90, image: "/Milk/2.jpg" },
            { name: "Gokul", price: 88, image: "/Milk/3.jpg" },
            { name: "Heritage", price: 95, image: "/Milk/1.jpg" },
            { name: "Milma", price: 70, image: "/Milk/2.jpg" },
            { name: "Verka", price: 78, image: "/Milk/3.jpg" },
            { name: "Warana", price: 85, image: "/Milk/1.jpg" },
            { name: "Keventers", price: 100, image: "/Milk/2.jpg" },
            { name: "Pride of Cows", price: 150, image: "/Milk/3.jpg" },
            { name: "Govind", price: 80, image: "/Milk/1.jpg" },
            { name: "Country Delight", price: 110, image: "/Milk/2.jpg" },
            { name: "Jersey", price: 95, image: "/Milk/3.jpg" },
            { name: "Nestle", price: 120, image: "/Milk/1.jpg" },
            { name: "Amirthaa", price: 105, image: "/Milk/2.jpg" }
        ]
    },
    reducers: {}
});

const cartSlice =createSlice({
    name : 'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const item =state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity+=1;
            }
            else {
                state.push({...action.payload,quantity:1})
            }
        },
        increment:(state,action)=>{
            const item =state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity+=1;
            }
        },
        decrement : (state,action)=>{
            const item =state.find(item=>item.name===action.payload.name);
            if((item)&&(item.quantity>1)){
                item.quantity-=1;
            }
            else{
                return state.filter(item=>item.name!==action.payload.name);
            }
        },
        remove:(state,action)=>{
          return state.filter(item=>item.name!==action.payload.name);
        },
        clearCart: () => [] 
       
    }
   
})
const purchaseDetailsSlice = createSlice({
    name: 'purchaseDetails',
    initialState: {
        orders: []  // Initialize as an array
    },
    reducers: {
        setPurchaseDetails: (state, action) => {
            state.orders.push(action.payload); // Directly update the purchaseDetails object
        }
    }
});
const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: localStorage.getItem("username") ? true : false, // Fixed type
        user: localStorage.getItem("username") || "", 
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true; // Fixed typo
            state.user = action.payload;
            localStorage.setItem("username", action.payload); // Store data in localStorage
        },
        logout: (state) => {
            state.isAuthenticated = false; // Fixed typo
            state.user = "";
            localStorage.removeItem("username");
        }
    }
});


// Ragistration slice
const registrationSlice = createSlice({
    name: "registration",
    initialState: { users: [] }, // Store multiple users  with the help of array
    reducers: {
      registerUser: (state, action) => {
        state.users.push(action.payload); // Add new user to the array
      },
    },
  });



// configure the store
const store =configureStore({
    reducer :{product:productSlice.reducer,
             cart :cartSlice.reducer,
             purchaseDetails :purchaseDetailsSlice.reducer,
             auth :authSlice.reducer,
             registration: registrationSlice.reducer
    }
})

//export the store
export default store;
export const {addToCart,increment,decrement,remove,clearCart}=cartSlice.actions;
export const { setPurchaseDetails } = purchaseDetailsSlice.actions;
export const {login,logout}=authSlice.actions;
export const { registerUser } = registrationSlice.actions;
