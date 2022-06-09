import React from 'react';
import raw from './../../img/download.png';
import react from './../../img/react.png';
import mern from './../../img/mern.jfif';

const Services = () => {
    return (
        <div id='services' className='container mx-auto mt-16'>
            <h1 className='text-5xl text-center mb-14'>Services</h1>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <div class="card bg-base-100 shadow-xl text-black  ">
                        <figure class="px-10 pt-10">
                            <img src={raw} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Raw HTML AND CSS website!</h2>
                            <p>Here i will design your web template with raw html-5 and css-3</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary"> Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card bg-base-100 shadow-xl text-black  ">
                        <figure class="px-10 pt-10">
                            <img src={react} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Single Page Application By React JS</h2>
                            <p>Here i will design your Front-end Application with react js and implementing React Router dom!</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary"> Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card bg-base-100 shadow-xl text-black  ">
                        <figure class="px-10 pt-10">
                            <img src={mern} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Mern Application!</h2>
                            <p>Here i will design your mern application With react js express js node js and mongodb</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary"> Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;