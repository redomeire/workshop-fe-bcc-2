import Button from "../../../components/button";

const ItemCard = ({ name, price, id, image }) => {
    return (
        <div className="flex md:flex-row flex-col rounded-xl min-h-[200px] bg-white my-3">
            <div className={`md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none rounded-tr-xl rounded-tl-xl bg-cover bg-center md:w-2/5 md:min-h-full min-h-[150px]`}
            style={{ backgroundImage: `url('${image}')` }}
            >
            </div>
            <div className="px-5 py-8 md:w-3/5">
                <div className="flex items-start justify-between border-b border-slate-200 pb-5 space-x-2">
                    <div>
                        <p className="font-semibold mb-1 text-xl text-left">{name}</p>
                        <p className="text-left">In stock</p>
                    </div>
                    <p className="text-lg font-semibold text-brown">${price}</p>
                </div>
                <a href={`/detail/${id}`}>
                    <Button className="mt-5 bg-raisin-black text-white">View details</Button>
                </a>
            </div>
        </div>
    );
}

export default ItemCard;
