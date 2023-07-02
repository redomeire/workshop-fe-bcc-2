import { useEffect } from "react"
import Gopay from "../../../assets/images/payment/gopay.png"
import Qris from "../../../assets/images/payment/qris.png"
import Shopeepay from "../../../assets/images/payment/shopeepay.png"

const wallets = [
    {
        name: 'Gopay',
        image: Gopay
    },
    {
        name: 'Qris',
        image: Qris
    },
    {
        name: 'Shopeepay',
        image: Shopeepay
    }
]

const EWalletCard = ({ paymentMethod, setPaymentMethod }) => {

    useEffect(() => {
        console.log(paymentMethod);
    }, [paymentMethod])

    return(
        <div className="p-5 bg-white rounded-xl text-left">
            <h3 className="font-semibold mb-5">Choose your payment method</h3>
            <div className="w-full flex items-center justify-between">
                {
                    wallets.map((wallet, index) => { 
                        return(
                            <div onClick={() => { setPaymentMethod(wallet.name) }} key={index} className={`rounded-lg p-3 transition duration-200 w-[30%] md:min-h-[200px] flex items-center cursor-pointer border-[1.5px] border-transparent hover:border-gray-400 ${paymentMethod === wallet.name ? '!border-gray-400' : ''}`}>
                                <img src={wallet.image} alt={wallet.name}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
 
export default EWalletCard;
