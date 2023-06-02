// hooks
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

// icons
import { AiFillStar } from "react-icons/ai";

// components
import AppLayout from "../components/partials/layout/AppLayout";
import Skeleton from "react-loading-skeleton";
import CartModifier from "../features/shop/details/CartModifier";

const Detail = () => {
    // we need to get the id of the item first
    const { id } = useParams();

    const { datas, loading, error } = useFetch({
        method: 'get',
        url: `/products/${id}`,
        data: {},
        onSubmit: false
    })

    // if error exist, render
    if (Object.keys(error).length !== 0)
        return (
            <AppLayout>
                <div className="md:w-1/2 w-full px-10 mx-auto mt-10 text-center md:px-0">
                    <h1>Error Occured!</h1>
                </div>
            </AppLayout>
        )

    return (
        <AppLayout>
            <div className="md:w-1/2 w-full px-10 mx-auto mt-10 text-center md:px-0">
                <p className="font-semibold text-3xl mb-5">Product Details</p>
                <div className="flex flex-col rounded-xl min-h-[200px] bg-white my-3">
                    <div className={` rounded-tr-xl rounded-tl-xl bg-cover bg-center min-h-[200px]`}
                        style={{ backgroundImage: `url('${datas[0]?.image}')` }}
                    >
                    </div>
                    <div className="px-5 py-8">
                        <div className="flex items-start justify-between pb-5 space-x-2">
                            <div className="w-[70%]">
                                {
                                    loading ?
                                        <Skeleton className="mb-5 h-[25px] w-full" />
                                        :
                                        <p className="font-bold mb-1 text-xl text-left">{datas[0]?.title}</p>
                                }
                                <p className="text-left font-medium text-sm">In Stock</p>
                            </div>
                            <p className="text-lg font-semibold text-brown w-[20%]">
                                {
                                    loading ? <Skeleton className="mb-5 h-[25px]" /> : "$" + datas[0]?.price
                                }
                            </p>
                        </div>
                        {
                            loading ?
                                <div className="w-[15%]">
                                    <Skeleton className="mb-5 h-[25px]" />
                                </div>
                                :
                                <div className="bg-brown w-fit p-2 rounded-xl text-sm font-medium">
                                    {datas[0]?.category}
                                </div>
                        }
                        {
                            loading ?
                                <div className="w-[15%]">
                                    <Skeleton />
                                </div>
                                :
                                <div className="flex items-center mt-3">
                                    <AiFillStar className="text-yellow-500" />
                                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                                        {datas[0]?.rating?.rate}
                                    </p>
                                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                    <p className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{datas[0]?.rating.count} reviews</p>
                                </div>
                        }
                        <p className="text-left my-3 font-medium border-t pt-3 border-slate-200">Description</p>
                        {
                            loading ?
                                <Skeleton count={3} />
                                :
                                <p className="text-left text-sm">{datas[0]?.description}</p>
                        }
                        <div className="flex items-center flex-wrap">
                            <CartModifier
                                id={id}
                                data={datas[0]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Detail;
