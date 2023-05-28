import { HiOutlineShoppingCart } from "react-icons/hi";
import Button from "../components/button";
import AppLayout from "../components/partials/layout/AppLayout";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
    // we need to get the id of the item first
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        category: '',
        description: '',
        image: '',
        rating: {
            count: 0,
            rate: 0,
        }
    });

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((result) => {
            console.log(result);
            setProduct(result.data)
        }).catch((err) => {
            console.error(err);
        });
    }, [id])

    const addToCart = () => {
        // logic here
    }

    const removeFromCart = () => {
        // logic here
    }
    
    return (
        <AppLayout>
            <div className="md:w-1/2 w-full px-10 mx-auto mt-10 text-center md:px-0">
                <p className="font-semibold text-3xl mb-5">Product Details</p>
                <div className="flex flex-col rounded-xl min-h-[200px] bg-white my-3">
                    <div className={` rounded-tr-xl rounded-tl-xl bg-cover bg-center min-h-[200px]`}
                    style={{ backgroundImage: `url('${product.image}')` }}
                    >
                    </div>
                    <div className="px-5 py-8">
                        <div className="flex items-start justify-between pb-5 space-x-2">
                            <div>
                                <p className="font-bold mb-1 text-xl text-left">{product.title}</p>
                                <p className="text-left font-medium text-sm">Stock</p>
                            </div>
                            <p className="text-lg font-semibold text-brown">${product.price}</p>
                        </div>
                        <div className="bg-brown w-fit p-2 rounded-xl text-sm font-medium">{product.category}</div>
                        <div className="flex items-center mt-3">
                            <AiFillStar className="text-yellow-500" />
                            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{product.rating.rate}</p>
                            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                            <p className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{product.rating.count} reviews</p>
                        </div>
                        <p className="text-left my-3 font-medium border-t pt-3 border-slate-200">Description</p>
                        <p className="text-left text-sm">{product.description}</p>
                        <div className="flex items-center flex-wrap">
                            <Button onClick={addToCart} className="bg-raisin-black text-white mt-5 mr-2" endIcon={
                                <HiOutlineShoppingCart size={20} />}>
                                Add to cart
                            </Button>
                            <Button onClick={removeFromCart} className="bg-raisin-black text-white mt-5" endIcon={
                                <HiOutlineShoppingCart size={20} />}>
                                Remove from cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Detail;
