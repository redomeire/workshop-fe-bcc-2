import { useContext, useMemo } from "react";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import { CartContext } from "../../../context/CartContext";
import Button from "../../../components/button";

const CartModifier = ({ data, id }) => {
    const { cartDatas, dispatch } = useContext(CartContext)

    // find cart item that match the id
    const itemDetail = useMemo(() => {
        const filteredCart = cartDatas.find((cart) => cart.id === parseInt(id))
        return filteredCart
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
                !itemDetail ?
                    <Button onClick={addToCart} className="bg-raisin-black text-white mr-2" endIcon={
                        <HiOutlineShoppingCart size={20} />}>
                        Add to cart
                    </Button>
                    :
                    <div className="flex items-center">
                        <Button onClick={addToCart} className="bg-raisin-black text-white">
                            <AiOutlinePlus size={20} />
                        </Button>
                        <p className="mx-5 font-semibold">{itemDetail?.count}</p>
                        <Button onClick={removeFromCart} className="bg-raisin-black text-white">
                            <AiOutlineMinus size={20} />
                        </Button>
                    </div>
            }
        </>
    )
}

export default CartModifier;
