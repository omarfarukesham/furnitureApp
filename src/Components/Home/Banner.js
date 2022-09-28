import React from 'react';
import banner from '../../images/banner.png'
import light from '../../images/image 32.png'

const Banner = () => {
    return (
        <>
            <div class='hero h-screen lg:h-[70vh] relative bg-neutral'>
                <div class='hero-content flex-col lg:flex-row'>
                    <div className='flex justify-center'>
                        <div className='hidden lg:block'>
                            <img className='mt-[-110px] ml-10' src={light} alt='light images' />
                        </div>
                        <div className='text-justify'>
                            <small className='text-primary' >
                                Best Furniture For your Castle ....
                            </small>
                            <p class='text-3xl font-bold' >
                                New Furniture Collection trend in 2022
                            </p>
                            <p class='py-6 max-w-xl sm:max-w-lg'>
                                Simple we believe business Ethics, so No compromised with the right sourcing
                            </p>
                            <button className="btn btn-primary  text-white">Visit Sourcing</button>
                        </div>
                    </div>


                    {/* <div className='text-accent ms:text-xl'>
                        <small className='text-primary' >
                            Best Furniture For your Castle
                        </small>
                        <p class='text-2xl font-bold' >
                           New Furniture Collection trend in 2022
                        </p>
                        <p class='py-6 max-w-xl sm:max-w-lg'>
                            Simple we believe business Ethics, so No compromised with the right sourcing
                        </p>
                        <br></br>
                        <button  className="btn btn-primary  text-white">Visit Sourcing</button>
                    </div> */}


                    <div className='h-[60vh] shrink-0' data-aos="fade-in" data-aos-duration="2000">
                        <img src={banner} class='h-full rounded-xl' alt='' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;