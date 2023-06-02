import { useContext } from "react";
import { IoMdClose } from "react-icons/io"
import { CartContext } from "../../../context/CartContext";

const CartItem = ({ data }) => {
    const { dispatch } = useContext(CartContext)

    const handleClick = () => {
        dispatch({
            type: 'remove_from_cart',
            id: data?.id
        })
    }

    return (
        <li className="flex items-center justify-between p-2 rounded-xl shadow my-3 bg-white border border-gray-200 relative">
            <img src={data.image} className="w-[40px]" alt="saxophone" />
            <div className="text-right md:mr-7">
                <a href={`/detail/${data.id}`}>
                    <p className="font-semibold text-sm hover:underline cursor-pointer">{data.title}</p>
                </a>
                <p>{data.category}</p>
            </div>
            <IoMdClose onClick={handleClick} className="cursor-pointer absolute top-2 right-2" />
        </li>
    );
}

export default CartItem;
