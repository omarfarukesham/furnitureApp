import React from 'react';
import t1 from '../../images/T1.png'
import t2 from '../../images/T2.png'
import t3 from '../../images/T3.png'
import t4 from '../../images/T4.png'
import t5 from '../../images/T5.png'
import t6 from '../../images/T6.png'
import t7 from '../../images/T7.png'
import t8 from '../../images/T8.png'
import t9 from '../../images/T9.png'

const TrendingProd = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center text-3xl text-accent mb-5'>Trending Products</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mx-12 sm:mx-auto'>

                <div className='bg-[#F5F6F8] w-[270px] h-[350px] hover:shadow-2xl shadow-xl rounded-xl'>
                    <div className='bg-base-200 m-2 rounded-xl'>
                        <img className='w-full' src={t1} alt="trendingProdImg" />
                    </div>
                    <div className="items-center text-center  text-accent ">
                        <h2 className="font-bold">Cantilever Chair</h2>
                        <small className='font-bold'> $ 24.OO -</small>
                        <small className='font-bold text-gray-400'> $ 40.OO</small>
                    </div>
                </div>

                <div className='bg-[#F5F6F8] w-[270px] h-[350px] hover:shadow-2xl shadow-xl rounded-xl'>
                    <div className='bg-base-200 m-2 rounded-xl'>
                        <img className='w-full' src={t2} alt="trendingProdImg" />
                    </div>
                    <div className="items-center text-center  text-accent ">
                        <h2 className="font-bold">Cantilever Chair</h2>
                        <small className='font-bold'> $ 24.OO -</small>
                        <small className='font-bold text-gray-400'> $ 40.OO</small>
                    </div>
                </div>

                <div className='bg-[#F5F6F8] w-[270px] h-[350px] hover:shadow-2xl shadow-xl rounded-xl'>
                    <div className='bg-base-200 m-2 rounded-xl'>
                        <img className='w-full' src={t3} alt="trendingProdImg" />
                    </div>
                    <div className="items-center text-center  text-accent ">
                        <h2 className="font-bold">Cantilever Chair</h2>
                        <small className='font-bold'> $ 24.OO -</small>
                        <small className='font-bold text-gray-400'> $ 40.OO</small>
                    </div>
                </div>

                <div className='bg-[#F5F6F8] w-[270px] h-[350px] hover:shadow-2xl shadow-xl rounded-xl'>
                    <div className='bg-base-200 m-2 rounded-xl'>
                        <img className='w-full' src={t4} alt="trendingProdImg" />
                    </div>
                    <div className="items-center text-center  text-accent ">
                        <h2 className="font-bold">Cantilever Chair</h2>
                        <small className='font-bold'> $ 24.OO -</small>
                        <small className='font-bold text-gray-400'> $ 40.OO</small>
                    </div>
                </div>


            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid:gap-5 mt-5 sm:mx-auto'>

                <div className='bg-[#FFF6FB] md:w-[360px] sm:w-[200px] lg:w-[360px] h-[270px] hover:shadow-2xl mx-5 shadow-xl rounded-xl'>
                    <div className="mx-5 mt-5 ">
                        <h2 className="font-bold text-accent">23% off is in all products</h2>
                        <button className='font-bold text-primary underline'>Show Now</button>
                    </div>
                    <div className='rounded-xl flex justify-end'>
                        <img className='' src={t5} alt="trendingProdImg" />
                    </div>
                </div>

                <div className='bg-[#EEEFFB] md:w-[360px] sm:w-[200px] lg:w-[360px]  h-[270px]  hover:shadow-2xl shadow-xl rounded-xl'>
                    <div className="mx-5 mt-5 ">
                        <h2 className="font-bold text-accent">23% off is in all products</h2>
                        <button className='font-bold text-primary underline'>Show Now</button>
                    </div>
                    <div className='rounded-xl flex justify-end'>
                        <img className='' src={t6} alt="trendingProdImg" />
                    </div>
                </div>


                <div className='bg-[#ffffff] md:w-[360px] sm:w-[200px] lg:w-[420px] h-[270px] hover:shadow-2xl shadow-xl rounded-xl'>

                    <div className='flex flex-col justify-center'>

                        <div className='flex justify-start mx-2 items-center'>
                            <div className='rounded-xl  m-2'>
                                <img className='w-full bg-base-200 rounded-2xl' src={t7} alt="trendingProdImg" />
                            </div>

                            <div className="mx-5  ">
                                <h2 className="font-bold text-accent">Executive Seats Chair</h2>
                                <p className='font-bold text-primary underline'> $39.oo</p>
                            </div>
                        </div>
                        <div className='flex justify-start mx-2 items-center'>
                            <div className='rounded-xl  m-2'>
                                <img className='w-full bg-base-200 rounded-2xl' src={t8} alt="trendingProdImg" />
                            </div>
                            <div className="mx-5  ">
                                <h2 className="font-bold text-accent">Executive Seats Chair</h2>
                                <p className='font-bold text-primary underline'> $39.oo</p>
                            </div>
                        </div>
                        <div className='flex justify-start mx-2 items-center'>
                            <div className='rounded-xl  m-2'>
                                <img className='w-full bg-base-200 rounded-2xl' src={t9} alt="trendingProdImg" />
                            </div>
                            <div className="mx-5  ">
                                <h2 className="font-bold text-accent">Executive Seats Chair</h2>
                                <p className='font-bold text-primary underline'> $39.oo</p>
                            </div>
                        </div>

                        


                    </div>

                </div>

            </div>


        </div>
    );
};

export default TrendingProd;