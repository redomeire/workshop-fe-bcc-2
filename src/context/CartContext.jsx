import { createContext } from "react";

export const CartContext = createContext();

const CartCTXFunc = ({ children }) => {
    const reducer = (state, action) => {
        
    }

    /* we can make a reducer hooks to add or 
    * removing item from cart
    */


    return ( 
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    );
}
 
export default CartCTXFunc;
