import React from 'react';
import p from '../../images/p.png'
import p1 from '../../images/p1.png'
import p2 from '../../images/p2.png'
import p3 from '../../images/p3.png'
const Features = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center text-3xl text-accent my-5'>Feature Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-12'>

                <div className='card bg-base-200 shadow-xl text-center' data-aos="fade-up" data-aos-duration="2000">
                    <img src={p} alt="product" className="rounded-xl ml-10 text-center h-48 w-48 p-5 " />
                    <div className="card-body items-center text-center bg-base-100">
                        <h2 className="card-title text-primary">Cantilever Chair</h2>
                        <div className='flex justify-center'>
                            <a className='text-bold text-green-400 text-center  text-4xl'>-</a>
                            <a className='text-bold text-accent text-center  text-4xl'>-</a>
                            <a className='text-bold text-primary text-center  text-4xl'>-</a>
                        </div>
                        <small className='font-bold'>Code - YC521</small>
                        <small className='font-bold'> $ 42.OO</small>
                    </div>
                </div>

                <div className='card bg-base-200 shadow-xl text-center' data-aos="fade-up" data-aos-duration="2000">
                    <div className='flex justify-start'>
                        <a className='text-accent mx-2 mt-2'><i class="fa-regular fa-heart"></i></a>
                        <a className='text-accent mx-2 mt-2'><i class="fa-solid fa-cart-arrow-down"></i></a>
                        <a className='text-accent mt-2'><i class="fa-brands fa-searchengin"></i></a>
                    </div>
                    <img src={p1} alt="product" className="rounded-xl ml-10 text-center h-48 w-48 p-5 " />
                    <div className="card-actions flex justify-center p-2">
                        <button className="btn btn-primary btn-sm text-white">Details</button>
                    </div>
                    <div className="card-body items-center text-center bg-accent text-white 0">
                        <h2 className="card-title">Cantilever Chair</h2>
                        <div className='flex justify-center'>
                            <a className='text-bold text-green-400 text-center  text-4xl'>-</a>
                            <a className='text-bold text-white text-center  text-4xl'>-</a>
                            <a className='text-bold text-primary text-center  text-4xl'>-</a>
                        </div>
                        <small className='font-bold'>Code - YC521</small>
                        <small className='font-bold'> $ 42.OO</small>

                    </div>
                </div>



                <div className='card bg-base-200 shadow-xl text-center' data-aos="fade-up" data-aos-duration="2000">
                    <img src={p2} alt="product" className="rounded-xl ml-10 text-center h-48 w-48 p-5 " />
                    <div className="card-body items-center text-center bg-base-100 ">
                        <h2 className="card-title text-primary">Cantilever Chair</h2>
                        <div className='flex justify-center'>
                            <a className='text-bold text-blue-500 text-center  text-4xl'>-</a>
                            <a className='text-bold text-yellow-500 text-center  text-4xl'>-</a>
                            <a className='text-bold text-primary text-center  text-4xl'>-</a>
                        </div>
                        <small className='font-bold'>Code - YC521</small>
                        <small className='font-bold'> $ 42.OO</small>
                    </div>
                </div>

                <div className='card bg-base-200 shadow-xl text-center' data-aos="fade-up" data-aos-duration="2000">
                    <img src={p3} alt="product" className="rounded-xl ml-10 text-center h-48 w-48 p-5 " />
                    <div className="card-body items-center text-center bg-base-100">
                        <h2 className="card-title text-primary">Cantilever Chair</h2>
                        <div className='flex justify-center'>
                            <a className='text-bold text-gray-800 text-center  text-4xl'>-</a>
                            <a className='text-bold text-blue-800 text-center  text-4xl'>-</a>
                            <a className='text-bold text-primary text-center  text-4xl'>-</a>
                        </div>
                        <small className='font-bold'>Code - YC521</small>
                        <small className='font-bold'> $ 42.OO</small>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Features;