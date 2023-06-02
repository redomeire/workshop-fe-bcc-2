import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../features/cart/data/reducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    /* we can make a reducer hooks to add or 
    * removing item from cart
    */
    const [cartDatas, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("cart") ?? "[]"));

    /*
    * here you can set localstorage 
    * to be able to consume in cart page
    */
   useEffect(() => {
            localStorage.setItem("cart", JSON.stringify(cartDatas))
   }, [cartDatas])

    return ( 
        <CartContext.Provider value={{ cartDatas, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}
 
export default CartProvider;
