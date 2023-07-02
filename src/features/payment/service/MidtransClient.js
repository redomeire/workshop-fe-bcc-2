import axios from "axios"

const payAmount = async ({ payment_type, transaction_details }) => {
    let parameter = {
        payment_type,
        transaction_details
    }

    let response = null

    try {
        response = await axios.post('https://api.sandbox.midtrans.com/v2/charge', parameter, {
            headers: {
                Authorization: `Basic ${btoa(import.meta.env.VITE_APP_MIDTRANS_SERVER_KEY)}`,
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    } catch (error) {
        response = error
    }

    return response
}

export { payAmount }
