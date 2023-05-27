import { useState } from "react";
import Button from "../../../components/button";
import Input from "../../../components/input";
import { GrSearch, GrFilter } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";

const ShoppingForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex items-center justify-between sticky">
                <h3 className="text-left mb-3 text-2xl font-medium text-raisin-black">Enter your input here...</h3>
                <Button onClick={() => { setIsOpen(prev => !prev) }} className="text-left mb-3 text-2xl font-medium !p-2 bg-smoke-white border-gray-600">
                    <GrFilter size={15} />
                </Button>
            </div>
            <form>
                <Input endIcon={
                    <GrSearch size={20} />
                } placeholder="Find in FE shop..." />
                <Button className="w-full bg-raisin-black text-white mt-2" endIcon={
                    <HiOutlineShoppingCart size={20} />
                }>Search Store</Button>
                <div className={`rounded-lg p-3 bg-white shadow mt-5 transition duration-500 opacity-100 ${!isOpen && 'hidden'}`}>
                    <div className="flex justify-between sm:flex-row flex-col">
                        <div className="sm:w-[47%]">
                            <p className="text-left mb-2 font-medium">Sort</p>
                            <select defaultValue="asc" id="sort" className="cursor-pointer border-[1.5px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-gray-400 w-full p-2.5 transition duration-200">
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                        <div className="sm:w-[47%] sm:mt-0 mt-3">
                            <p className="text-left mb-2 font-medium">Categories</p>
                            <select defaultValue="electronics" id="categories" className="cursor-pointer border-[1.5px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-gray-400 w-full p-2.5 transition duration-200">
                                <option value="electronics">electronics</option>
                                <option value="jewelery">jewelery</option>
                                <option value="men's clothing">men's clothing</option>
                                <option value="women's clothing">women's clothing</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:w-full mt-3">
                        <p className="text-left mb-2 font-medium">Limit</p>
                        <Input type="number" defaultValue={1} />
                    </div>
                </div>
            </form>
        </>
    );
}

export default ShoppingForm;
