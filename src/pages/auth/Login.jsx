import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import AppLayout from "../../components/partials/layout/AppLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('https://fakestoreapi.com/auth/login', {
            username,
            password
        })
        .then((result) => {
            console.log(result)
            localStorage.setItem('token', result.data.token)

            setTimeout(() => {
                navigate('/shop')
            }, 1000);
        }).catch((err) => {
            console.error(err)
        });
    }

    return ( 
        <AppLayout>
            <form onSubmit={handleSubmit} className="w-1/2 mx-auto mt-20 bg-white p-10 hover:shadow-xl transition duration-200 rounded-lg">
                <label htmlFor="username" className="block mb-2">
                    Username
                </label>
                <Input 
                placeholder="insert your username" 
                onChange={(e) => { setUsername(e.target.value) }} />
                <label htmlFor="password" className="mt-5 block mb-2">
                    Password
                </label>
                <Input
                onChange={(e) => { setPassword(e.target.value) }}
                type="password"
                placeholder="insert your password" />
                <Button className="bg-raisin-black text-white mt-5">Submit</Button>
            </form>
        </AppLayout>
    );
}
 
export default Login;
