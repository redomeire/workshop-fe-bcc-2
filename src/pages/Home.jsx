import AppLayout from "../components/partials/layout/AppLayout";
import Button from "../components/button";

export const NumberContext = createContext();

const Home = () => {
    return (
        <AppLayout>
            <div className="md:w-1/2 w-full px-10 mx-auto mt-28 text-center md:px-0">
                <h1 className="text-6xl leading-[80px] font-semibold">A brand new way to shopping</h1>
                <div className="flex items-center w-fit mx-auto mt-10 space-x-2">
                    <a href="/shop">
                        <Button className="bg-raisin-black text-white">Go shopping</Button>
                    </a>
                </div>
            </div>
        </AppLayout>
    );
}

export default Home;
