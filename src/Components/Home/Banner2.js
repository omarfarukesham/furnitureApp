import React from 'react';
import banner2 from '../../images/banner2png.png'
const Banner2 = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 bg-[#F1F0FF] lg:w-full sm:w-[95%] h-auto '>
            <div className='lg:ml-8 sm:ml-0'>
                <img src={banner2} alt="2ndBannerImg" />
            </div>
            <div className='flex flex-col justify-center mx-2'>
                <div className='text-justify'>
                    <h1 className='text-2xl text-accent font-bold mb-5'>Unique Features Of latest & Trending Products</h1>
                    <i class="fa-solid fa-circle text-red-500 mx-2"></i>
                    <small className='text-sm'>All frames constructed with hardwood solids and laminates</small>
                    <br></br>
                    <i class="fa-solid fa-circle text-accent mx-2"></i>
                    <small className='text-sm'>Reinforced with double wood dowels, glue, screw - nails corner
                        blocks and machine nails</small>
                    <br></br>
                    <i class="fa-solid fa-circle text-green-500 mx-2"></i>
                    <small className='text-sm'>All frames constructed with hardwood solids and laminates</small>
                </div>
                <div className='my-8'>
                    <button className="btn btn-primary  text-white">Add to Cart</button>
                    <span className='text-xl mx-2 font-bold text-accent'>B&B Italian Sofa </span>
                </div>
            </div>

        </div>
    );
};

export default Banner2;