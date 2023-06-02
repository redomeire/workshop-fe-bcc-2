import { useContext, useMemo } from "react";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import { CartContext } from "../../../context/CartContext";
import Button from "../../../components/button";

const CartModifier = ({ data, id }) => {
    const { cartDatas, dispatch } = useContext(CartContext)

    // caching cartDataCount value
    const cartDataCount = useMemo(() => {
        const filteredCart = cartDatas.filter((cart) => cart.id === parseInt(id))
        return filteredCart.length
    }, [cartDatas])

    const addToCart = () => {
        dispatch({
            type: 'add_to_cart',
            value: data
        })
    }

    const removeFromCart = () => {
        dispatch({
            type: 'remove_from_cart',
            id: data.id
        })
    }

    return (
        <>
            {
                cartDataCount === 0 ?
                    <Button onClick={addToCart} className="bg-raisin-black text-white mt-5 mr-2" endIcon={
                        <HiOutlineShoppingCart size={20} />}>
                        Add to cart
                    </Button>
                    :
                    <div className="flex items-center mt-5">
                        <Button onClick={addToCart} className="bg-raisin-black text-white">
                            <AiOutlinePlus size={20} />
                        </Button>
                        <p className="mx-5 font-semibold">{cartDataCount}</p>
                        <Button onClick={removeFromCart} className="bg-raisin-black text-white">
                            <AiOutlineMinus size={20} />
                        </Button>
                    </div>
            }
        </>
    )
}

export default CartModifier;
