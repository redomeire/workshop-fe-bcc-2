import { AiOutlineHome } from "react-icons/ai";
import Button from "../components/button";
import AppLayout from "../components/partials/layout/AppLayout";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <AppLayout>
            <div className="md:w-1/2 w-full px-10 mx-auto mt-32 text-center md:px-0">
                <h1 className="text-3xl font-semibold">Oops... Page not found!</h1>
                <Link to="/" className="w-fit mx-auto block">
                    <Button
                        endIcon={<AiOutlineHome />}
                        className="bg-raisin-black text-white mt-10">
                        Back to home
                    </Button>
                </Link>
            </div>
        </AppLayout>
    );
}

export default NotFound;
