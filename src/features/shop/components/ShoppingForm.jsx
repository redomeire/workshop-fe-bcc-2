import { useState } from "react";
import Button from "../../../components/button";
import { GrFilter } from "react-icons/gr";
import Input from "../../../components/input";
import { HiOutlineShoppingCart } from "react-icons/hi";
import axios from "axios";

const ShoppingForm = ({ setProducts }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formDatas, setFormDatas] = useState({
        sort: '',
        limit: 1
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get("https://fakestoreapi.com/products", {
            params: formDatas
        })
            .then((result) => {
                console.log(result)
                setProducts(result.data)
            }).catch((err) => {
                console.error(err)
            });
    }

    return (
        <>
            <div className="flex items-center justify-between sticky">
                <h3 className="text-left mb-3 text-2xl font-medium text-raisin-black">Enter your input here...</h3>
                <Button onClick={() => { setIsOpen(prev => !prev) }} className="text-left mb-3 text-2xl font-medium !p-2 bg-smoke-white border-gray-600">
                    <GrFilter size={15} />
                </Button>
            </div>
            <form onSubmit={handleSubmit}>
                <Button className="w-full bg-raisin-black text-white mt-2" endIcon={
                    <HiOutlineShoppingCart size={20} />
                }>Search Store</Button>
                <div className={`rounded-lg p-3 bg-white shadow mt-5 transition duration-500 opacity-100 ${!isOpen && 'hidden'}`}>
                    <div className="flex justify-between sm:flex-row flex-col">
                        <div className="sm:w-[47%]">
                            <p className="text-left mb-2 font-medium">Sort</p>
                            <select onChange={(e) => {
                                setFormDatas(prev => {
                                    return {
                                        ...prev, sort: e.target.value
                                    }
                                })
                            }} defaultValue="asc" id="sort" className="cursor-pointer border-[1.5px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-gray-400 w-full p-2.5 transition duration-200">
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                        <div className="sm:w-[47%] sm:mt-0 mt-3">
                            <p className="text-left mb-2 font-medium">Limit</p>
                            <Input
                                onChange={(e) => {
                                    setFormDatas(prev => {
                                        return {
                                            ...prev, limit: e.target.value
                                        }
                                    })
                                }}
                                placeholder="enter limit" type="number" min="1" />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default ShoppingForm;
