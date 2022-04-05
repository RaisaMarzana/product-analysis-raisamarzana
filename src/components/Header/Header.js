import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-7 flex flex-col justify-center items-center'>
            <div>
                <ul>
                    <Link className='mr-2 rounded-lg px-5 py-2 bg-pink-200 text-black hover:text-black hover:shadow-lg hover:font-bold' to="/">HOME</Link>
                    <Link className='mr-2 rounded-lg px-5 py-2 bg-pink-200 text-black hover:text-black hover:shadow-lg hover:font-bold' to="/reviews">REVIEWS</Link>
                    <Link className='mr-2 rounded-lg px-5 py-2 bg-pink-200 text-black hover:text-black hover:shadow-lg hover:font-bold' to="/dashboard">DASHBOARD</Link>
                    <Link className='mr-2 rounded-lg px-5 py-2 bg-pink-200 text-black hover:text-black hover:shadow-lg hover:font-bold' to="/blogs">BLOGS</Link>
                </ul>
            </div>
        </div >
    );
};

export default Header;