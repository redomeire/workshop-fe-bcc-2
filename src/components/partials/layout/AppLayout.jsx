import Appbar from "../appbar";

const AppLayout = ({ children }) => {
    return ( 
        <>
            <Appbar />
            <main className="min-h-screen bg-smoke-white py-24">
                {children}
            </main>
        </>
     );
}
 
export default AppLayout;
