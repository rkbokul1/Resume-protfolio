import React from 'react';
import banner from './../../img/banner.jfif';
import resume from './../../img/Final Resume.pdf';
import image from './../../img/600x600 1.png';

const Banner = () => {
    return (
        <div>
            {/* <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})`, maxHeight: `100px` }}> */}
            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
                        <div>
                            <h1 className='text-5xl text-white mb-2 mt-5 md:mt-0'>Hi! I'm Raihanul Kabir</h1>
                            <p className='text-xl mb-4'>Junior Mern Stack Developer!</p>
                            <a href={`${resume}`} className='btn btn-outline btn-primary' >Download Resume</a>
                        </div>
                        <div className='flex justify-center'>
                            <img className='rounded-lg w-6/12 text-center pt-5 md:pt-0' src={image} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;