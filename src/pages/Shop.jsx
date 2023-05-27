import AppLayout from "../components/partials/layout/AppLayout";
import ItemCard from "../features/shop/components/ItemCard";
import ShoppingForm from "../features/shop/components/ShoppingForm";

const Shop = () => {
    return ( 
        <AppLayout>
            <div className="md:w-1/2 w-full px-10 mx-auto mt-10 text-center md:px-0">
                <ShoppingForm />
                <p className="mt-10 text-3xl font-semibold">Result</p>
                <div>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </div>
        </AppLayout>
    );
}
 
export default Shop;
