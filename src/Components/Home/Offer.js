import React from 'react';
import offer from '../../images/car.png'
import offer1 from '../../images/offer1.png'
import offer2 from '../../images/offer2.png'
import offer3 from '../../images/offer3.png'
const Offer = () => {
    return (
        <div className='my-12'>
            <h1 className='text-center text-3xl text-accent my-5'>What Shopex Offer</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-12'>
                <div className=' flex flex-col justify-evenly items-center shadow-xl w-[270px] bg-base-100 h-[320px] rounded-xl hover:shadow-2xl'>
                    <div>
                        <img src={offer} alt="SupportImage" />
                    </div>
                    <div className='p-2'>
                        <h1 className='text-2xl text-accent font-bold'> 24/7 Support</h1>
                        <small>Customer Service is our main strength, no doubts our 
                            home service is anytime</small>
                    </div>
                </div>
                <div className=' flex flex-col justify-evenly items-center shadow-xl w-[270px] bg-base-100 h-[320px] rounded-xl hover:shadow-2xl'>
                    <div>
                        <img src={offer1} alt="SupportImage" />
                    </div>
                    <div className='p-2'>
                        <h1 className='text-2xl text-accent font-bold'> 24/7 Support</h1>
                        <small>Customer Service is our main strength, no doubts our 
                            home service is anytime</small>
                    </div>
                </div>
                <div className=' flex flex-col justify-evenly items-center shadow-xl w-[270px] bg-base-100 h-[320px] rounded-xl hover:shadow-2xl'>
                    <div>
                        <img src={offer2} alt="SupportImage" />
                    </div>
                    <div className='p-2'>
                        <h1 className='text-2xl text-accent font-bold'> 24/7 Support</h1>
                        <small>Customer Service is our main strength, no doubts our 
                            home service is anytime</small>
                    </div>
                </div>
                <div className=' flex flex-col justify-evenly items-center shadow-xl w-[270px] bg-base-100 h-[320px] rounded-xl hover:shadow-2xl'>
                    <div className='p-2'>
                        <img src={offer3} alt="SupportImage" />
                    </div>
                    <div className='p-3'>
                        <h1 className='text-2xl text-accent font-bold'> 24/7 Support</h1>
                        <small>Customer Service is our main strength, no doubts our 
                            home service is anytime</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;