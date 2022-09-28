import React from 'react';
import latest from '../../images/latest1.png'
import latest1 from '../../images/latest2.png'
import latest2 from '../../images/latest3.png'
import latest3 from '../../images/latest4.png'
import latest4 from '../../images/latest55.png'
import latest5 from '../../images/latest66.png'
import sales from '../../images/sales.png'

const LatestProduct = () => {
    return (
        <>
            <div className=' bg-base-100 shadow-lg mx-12 mt-10 '>
                <h1 className='text-3xl mb-5 text-accent text-center font-bold'><i class="fa-solid fa-dolly mx-2 text-accent"></i>Latest Products</h1>

                <div className='flex justify-center mb-5'>
                    <a className='mx-2 text-primary underline'>NewArrival</a>
                    <a className='mx-2 text-accent '>BestSales</a>
                    <a className='mx-2 text-accent '>Feature</a>
                    <a className='mx-2 text-accent '>Special Offer</a>
                  
                    
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-12 sm:mx-auto'>

                    <div className='w-72 bg-base-200 hover:shadow-xl text-center rounded-xl'>
                        <img className='w-full' src={latest} alt="" />
                        <div className='flex justify-between bg-base-100 mt-8 p-2'>
                            <small className="text-accent font-bold">Comfort Handy Craft </small>
                            <div className=''>
                                <small className='text-bold text-accent text-center '>$45 </small>
                                <small className='text-bold text-red-500 text-center '>$69 </small>
                            </div>
                        </div>
                    </div>

                    <div className='w-72 bg-base-100 hover:shadow-xl text-center rounded-xl'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col justify-between'>
                                <div className=''>
                                    <img className='w-24' src={sales} alt="salesImage" />
                                </div>
                                <div className='flex flex-col-reverse justify-start'>
                                    <a className='text-accent mx-2 mt-2'><i class="fa-regular fa-heart"></i></a>
                                    <a className='text-accent mx-2 mt-2'><i class="fa-solid fa-cart-arrow-down"></i></a>
                                    <a className='text-accent mt-2'><i class="fa-brands fa-searchengin"></i></a>
                                </div>
                            </div>
                            <img className='w-full' src={latest1} alt="chairImg" />
                        </div>

                        <div className='flex justify-between bg-base-100 mt-8 p-2'>
                            <small className="text-accent font-bold">Comfort Handy Craft </small>
                            <div>
                                <small className='text-bold text-accent text-center '>$45 </small>
                                <small className='text-bold text-red-500 text-center '>$69 </small>
                            </div>
                        </div>
                    </div>

                    <div className='w-72 bg-base-200 hover:shadow-xl text-center rounded-xl'>
                        <img className='w-full' src={latest2} alt="" />
                        <div className='flex justify-between bg-base-100 mt-8 p-2'>
                            <small className="text-accent font-bold">Comfort Handy Craft </small>
                            <div className=''>
                                <small className='text-bold text-accent text-center '>$45 </small>
                                <small className='text-bold text-red-500 text-center '>$69 </small>
                            </div>
                        </div>
                    </div>
                    <div className='w-72 bg-base-200 hover:shadow-xl text-center rounded-xl'>
                        <img className='w-full' src={latest3} alt="" />
                        <div className='flex justify-between bg-base-100 mt-8 p-2'>
                            <small className="text-accent font-bold">Comfort Handy Craft </small>
                            <div className=''>
                                <small className='text-bold text-accent text-center '>$45 </small>
                                <small className='text-bold text-red-500 text-center '>$69 </small>
                            </div>
                        </div>
                    </div>
                    <div className='w-72 bg-base-200 hover:shadow-xl text-center rounded-xl'>
                        <img className='w-full' src={latest4} alt="" />
                        <div className='flex justify-between bg-base-100 mt-8 p-2'>
                            <small className="text-accent font-bold">Comfort Handy Craft </small>
                            <div className=''>
                                <small className='text-bold text-accent text-center '>$45 </small>
                                <small className='text-bold text-red-500 text-center '>$69 </small>
                            </div>
                        </div>
                    </div>
                    <div className='w-72 bg-base-200 hover:shadow-xl text-center rounded-xl'>
                        <img className='w-full' src={latest5} alt="" />
                        <div className='flex justify-between bg-base-100 mt-8 p-2'>
                            <small className="text-accent font-bold">Comfort Handy Craft </small>
                            <div className=''>
                                <small className='text-bold text-accent text-center '>$45 </small>
                                <small className='text-bold text-red-500 text-center '>$69 </small>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </>
    );
};

export default LatestProduct;