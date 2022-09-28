import React from 'react';

const Navbar1 = () => {
    return (
        <div className='hidden lg:block'>
            <div className="flex justify-around bg-violet-500 h-[44px]">
                <div className="flex justify-end items-center">
                    <p className="normal-case text-white mx-0"><i class="fa-solid fa-at"></i> omar@gmail.com</p>
                    <p className="normal-case text-white mx-2"><i class="fa-solid fa-phone"></i>+88017555533</p>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 text-white">
                        
                        <li tabIndex={0}>
                            <a>
                                English
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <a>
                                USD
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <a>Login<i class="fa-solid fa-user-plus"></i></a>
                            <a>Wishlist<i class="fa-regular fa-heart"></i></a>
                            <a><i class="fa-solid fa-cart-arrow-down"></i></a>
                           
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar1;