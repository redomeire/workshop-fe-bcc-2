import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

import { IoMdClose } from "react-icons/io"
import CartModifier from "../../shop/details/CartModifier";

const CartItem = ({ data }) => {
    const { dispatch } = useContext(CartContext)

    const handleClick = () => {
        dispatch({
            type: 'remove_all_item_by_id',
            id: data?.id
        })
    }

    return (
        <li className="flex justify-start p-2 my-3 pt-5 bg-white border-t border-smoke-white relative">
            <div className="w-1/2 flex">
                <img src={data.image} className="w-[50px]" alt="saxophone" />
                <div className="text-left md:ml-3">
                    <a href={`/detail/${data.id}`}>
                        <p className="font-semibold text-sm hover:underline cursor-pointer">{data.title}</p>
                    </a>
                    <p>{data.category}</p>
                </div>
            </div>
            <div className="w-[30%]">
                <CartModifier data={data} id={data.id}/>
            </div>
            <div className="w-[20%] text-left">
                <p className="font-medium">${data.price}</p>
            </div>
            <IoMdClose onClick={handleClick} className="cursor-pointer absolute top-2 right-2" />
        </li>
    );
}

export default CartItem;
