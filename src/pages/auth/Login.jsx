import { useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import AppLayout from '../../components/partials/layout/AppLayout';
import axios from 'axios';
import { data } from 'autoprefixer';
import { setToken } from '../../services/userToken';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://fakestoreapi.com/auth/login', form);
      setToken(res.data.token);
      navigate('/shop');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AppLayout>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-50 p-10 rounded-lg hover:shadow-xl transition duration-200 w-1/2 mx-auto mt-20"
      >
        <div>
          <label htmlFor="username">Username</label>
          <Input
            id="username"
            placeholder="Insert your username"
            value={form.username}
            onChange={handleChange}
            name="username"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            placeholder="Insert your password"
            value={form.password}
            type="password"
            onChange={handleChange}
            name="password"
          />
        </div>
        <Button
          className="mt-6 ml-auto bg-raisin-black text-white"
          type="submit"
        >
          SUBMIT
        </Button>
      </form>
    </AppLayout>
  );
}
