import Button from "../../../components/button";

const ItemCard = () => {
    return (
        <div className="flex md:flex-row flex-col rounded-xl min-h-[200px] bg-white my-3">
            <div className={`md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none rounded-tr-xl rounded-tl-xl bg-[url('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')] bg-cover bg-center md:w-2/5 md:min-h-full min-h-[150px]`}>
            </div>
            <div className="px-5 py-8 md:w-3/5">
                <div className="flex items-start justify-between border-b border-slate-200 pb-5 space-x-2">
                    <div>
                        <p className="font-semibold mb-1 text-xl text-left">Classic Utility Jacket</p>
                        <p className="text-left">In stock</p>
                    </div>
                    <p className="text-lg font-semibold text-brown">$110.0</p>
                </div>
                <a href="/detail/1">
                    <Button className="mt-5 bg-raisin-black text-white">View details</Button>
                </a>
            </div>
        </div>
    );
}

export default ItemCard;
