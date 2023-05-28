import { useContext, useState } from 'react';
import Button from '../../button';

// icons
import { GrClose, GrMenu } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const navbarDatas = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/shop',
    name: 'Shop',
  },
  {
    path: '/cart',
    name: 'Cart',
  },
];

const Appbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 flex justify-between items-center md:px-20 px-10 py-5 bg-smoke-white md:flex-row flex-col z-40">
      <h3 className="md:w-[33%] text-2xl font-bold w-full">FE shop</h3>
      <ul
        className={`md:flex md:w-[33%] w-full justify-center md:flex-row flex-col items-left md:mt-0 mt-10 ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        {navbarDatas.map((data, index) => {
          return (
            <li
              className={`md:mx-3 hover:border-b-raisin-black border-b-transparent border-b-2 transition duration-200 w-fit md:p-0 py-3 ${
                window.location.pathname === data.path &&
                '!border-b-raisin-black'
              }`}
              key={index}
            >
              <a href={data.path}>{data.name}</a>
            </li>
          );
        })}
      </ul>
      <div
        className={`md:flex md:w-[33%] w-full md:justify-end md:flex-row flex-col md:space-x-2 md:mt-0 mt-10 ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        <Button
          className="md:mb-0 mb-3 border-2 border-gray-700"
          onClick={() => navigate('/login')}
        >
          Sign in
        </Button>
        <Button className="bg-raisin-black text-white border-raisin-black">
          Sign up
        </Button>
      </div>
      <div className="absolute right-10 top-5 block md:hidden">
        {isOpen ? (
          <GrClose
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            size={25}
          />
        ) : (
          <GrMenu
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            size={25}
          />
        )}
      </div>
    </nav>
  );
};

export default Appbar;
