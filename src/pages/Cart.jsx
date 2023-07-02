import { useContext, useMemo, useState } from "react";
import { CartContext } from "../context/CartContext";

import AppLayout from "../components/partials/layout/AppLayout";
import Button from "../components/button";
import CartItem from "../features/cart/components/CartItem";
import { Link } from "react-router-dom";
import EWalletCard from "../features/payment/components/EWalletCard";
import { MdShoppingCartCheckout } from "react-icons/md"

const Cart = () => {
    const { cartDatas } = useContext(CartContext)
    const [paymentMethod, setPaymentMethod] = useState('');

    const subtotal = useMemo(() => {
        let total = 0

        cartDatas.map((data) => {
            total += data.price * data.count
        })

        return total
    }, [cartDatas])

    return (
        <AppLayout>
            <div className="md:w-4/5 w-full px-10 mx-auto mt-10 text-center md:px-0">
                <p className="mb-5 font-semibold text-3xl">Your Cart</p>
                <div className="flex items-start justify-center md:space-x-2 md:flex-row flex-col">
                    <div className="w-4/6">
                        <div className="p-3 rounded-xl bg-white w-full mb-3">
                            {
                                cartDatas?.length > 0 &&
                                <div className="flex text-left font-semibold text-gray-400">
                                    <p className="uppercase w-[50%]">product</p>
                                    <p className="uppercase w-[30%]">quantity</p>
                                    <p className="uppercase w-[20%]">price</p>
                                </div>
                            }
                            <ul>
                                {
                                    cartDatas?.length > 0 ?
                                        cartDatas?.map((data, index) => {
                                            return (
                                                <CartItem
                                                    key={index}
                                                    data={data}
                                                />
                                            )
                                        })
                                        :
                                        <div>
                                            <p className="text-xl mt-5">
                                                hmm! no carts here
                                            </p>
                                            <Link to="/shop">
                                                <Button className="mx-auto bg-raisin-black text-white mt-2 text-sm">Go Shopping</Button>
                                            </Link>
                                        </div>
                                }
                            </ul>
                        </div>
                        <EWalletCard 
                            paymentMethod={paymentMethod}
                            setPaymentMethod={setPaymentMethod}
                        />
                    </div>
                    <div className="md:w-2/6 w-full md:mt-0 mt-5 md:sticky top-24 p-5 rounded-xl bg-white hover:shadow-lg transition duration-200">
                        <div className="flex justify-between mb-3">
                            <p className="font-medium text-sm">Subtotal</p>
                            <p className="font-semibold">${subtotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between border-b-slate-200 mb-3">
                            <p className="font-medium text-sm">Diskon</p>
                            <p className="font-semibold">$0.00</p>
                        </div>
                        <div className="flex justify-between border-b border-b-slate-200 pb-5">
                            <p className="font-medium text-sm">Payment method</p>
                            <p className="font-semibold text-blue-700">{paymentMethod}</p>
                        </div>
                        <div className="flex justify-between pt-3">
                            <p className="font-medium text-sm">Grand Total</p>
                            <p className="font-semibold">${subtotal.toFixed(2)}</p>
                        </div>
                        <Button className="bg-raisin-black text-white w-full mt-5" beginningIcon={<MdShoppingCartCheckout />}>
                            Pay amount
                        </Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Cart;
