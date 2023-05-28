import { useState } from "react";
import AppLayout from "../components/partials/layout/AppLayout";
import ItemCard from "../features/shop/components/ItemCard";
import ShoppingForm from "../features/shop/components/ShoppingForm";

const Shop = () => {
    const [products, setProducts] = useState([]);

    return ( 
        <AppLayout>
            <div className="md:w-1/2 w-full px-10 mx-auto mt-10 text-center md:px-0">
                <ShoppingForm
                    setProducts={setProducts}
                />
                <p className="mt-10 text-3xl font-semibold">Result</p>
                <div>
                    {
                        products.map((product, index) => {
                            return(
                                <ItemCard 
                                    key={index}
                                    name={product.title}
                                    price={product.price}
                                    image={product.image}
                                    id={product.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </AppLayout>
    );
}
 
export default Shop;
