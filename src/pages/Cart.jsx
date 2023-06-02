import { useContext, useMemo } from "react";
import AppLayout from "../components/partials/layout/AppLayout";
import CartItem from "../features/cart/components/CartItem";
import { CartContext } from "../context/CartContext";
import Button from "../components/button";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartDatas } = useContext(CartContext)

    const subtotal = useMemo(() => {
        let total = 0

        cartDatas.map((data) => {
            total += data.price
        })

        return total
    }, [cartDatas])

    return (
        <AppLayout>
            <div className="md:w-1/2 w-full px-10 mx-auto mt-10 text-center md:px-0">
                <p className="mb-5 font-semibold text-3xl">Your Cart</p>
                <div className="flex items-start justify-center md:space-x-2 md:flex-row flex-col">
                    <div className="p-3 rounded-xl bg-white md:w-3/5">
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
                                        <p className="text-xl">
                                            hmm! no carts here
                                        </p>
                                        <Link to="/shop">
                                            <Button className="mx-auto bg-raisin-black text-white mt-2 text-sm">Go Shopping</Button>
                                        </Link>
                                    </div>
                            }
                        </ul>
                    </div>
                    <div className="md:w-2/5 sticky top-24 p-3 rounded-xl bg-white hover:shadow-lg transition duration-200">
                        <div className="flex justify-between mb-3">
                            <p className="font-medium text-sm">Subtotal</p>
                            <p className="font-semibold">${subtotal}</p>
                        </div>
                        <div className="flex justify-between border-b border-b-slate-200 pb-5">
                            <p className="font-medium text-sm">Diskon</p>
                            <p className="font-semibold">$0.00</p>
                        </div>
                        <div className="flex justify-between pt-3">
                            <p className="font-medium text-sm">Grand Total</p>
                            <p className="font-semibold">${subtotal.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Cart;
