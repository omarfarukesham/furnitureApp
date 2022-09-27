import React from 'react';
import latest from '../../images/latest1.png'
import latest1 from '../../images/latest2.png'
import latest2 from '../../images/latest3.png'
import latest3 from '../../images/latest4.png'
import latest4 from '../../images/latest5.png'
import latest5 from '../../images/latest6.png'
const LatestProduct = () => {
    return (
        <>
            <div className='mx-auto bg-base-200 shadow-lg p-10 w-full'>
                <h1 className='text-3xl mb-5 text-secondary text-center font-bold'><i class="fa-solid fa-dolly mx-2 text-secondary"></i>Products</h1>

                <div className='flex justify-center mb-5'>
                    <button className='btn btn-accent btn-xs mx-2 text-white'>All</button>
                    <button className='btn btn-accent btn-xs mx-2 text-white'>Watch</button>
                    <button className='btn btn-accent btn-xs mx-2 text-white'>Mobile</button>
                    <button className='btn btn-accent btn-xs mx-2 text-white'>Laptop</button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='card bg-base-100 shadow-xl text-center' data-aos="fade-up" data-aos-duration="2000">
                        <img src={latest} alt="product" className="rounded-xl ml-10 text-center h-48 w-48 p-5 " />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Product - </h2>
                            <small className='text-bold text-red-500 text-center'> Price </small>
                            <div className="card-actions flex justify-between ">
                                <button className="btn btn-secondary btn-sm text-white">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='card bg-base-100 shadow-xl text-center' data-aos="fade-up" data-aos-duration="2000">
                        <img src={latest1} alt="product" className="rounded-xl ml-10 text-center h-48 w-48 p-5 " />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Product - </h2>
                            <small className='text-bold text-red-500 text-center'> Price </small>
                            <div className="card-actions flex justify-between ">
                                <button className="btn btn-secondary btn-sm text-white">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='card bg-base-100 shadow-xl text-center' data-aos="fade-up" data-aos-duration="2000">
                        <img src={latest2} alt="product" className="rounded-xl ml-10 text-center h-48 w-48 p-5 " />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Product - </h2>
                            <small className='text-bold text-red-500 text-center'> Price </small>
                            <div className="card-actions flex justify-between ">
                                <button className="btn btn-secondary btn-sm text-white">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='card bg-base-100 shadow-xl text-center' data-aos="fade-up" data-aos-duration="2000">
                        <img src={latest3} alt="product" className="rounded-xl ml-10 text-center h-48 w-48 p-5 " />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Product - </h2>
                            <small className='text-bold text-red-500 text-center'> Price </small>
                            <div className="card-actions flex justify-between ">
                                <button className="btn btn-secondary btn-sm text-white">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='card bg-base-100 shadow-xl text-center' data-aos="fade-up" data-aos-duration="2000">
                        <img src={latest4} alt="product" className="rounded-xl ml-10 text-center h-48 w-48 p-5 " />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Product - </h2>
                            <small className='text-bold text-red-500 text-center'> Price </small>
                            <div className="card-actions flex justify-between ">
                                <button className="btn btn-secondary btn-sm text-white">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='card bg-base-100 shadow-xl text-center' data-aos="fade-up" data-aos-duration="2000">
                        <img src={latest5} alt="product" className="rounded-xl ml-10 text-center h-48 w-48 p-5 " />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Product - </h2>
                            <small className='text-bold text-red-500 text-center'> Price </small>
                            <div className="card-actions flex justify-between ">
                                <button className="btn btn-secondary btn-sm text-white">Buy Now</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default LatestProduct;