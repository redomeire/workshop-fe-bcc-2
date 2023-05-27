import { IoMdClose } from "react-icons/io"

const CartItem = () => {
    return (
        <li className="flex items-center justify-between p-2 rounded-xl shadow my-3 bg-white border border-gray-200 relative">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="w-[40px]" alt="saxophone" />
            <div className="text-right md:mr-7">
                <p className="font-semibold text-sm">Tas hitam kulit bajul</p>
                <p>Men's wear</p>
            </div>
            <IoMdClose className="cursor-pointer absolute top-2 right-2" />
        </li>
    );
}

export default CartItem;
