import React from 'react';
import manu from './../../img/manu.jpg';
import react from './../../img/react.png';
import mern from './../../img/mern.jfif';

const ProjectCarousel = () => {
    return ( 
        <div className='mt-16'>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <div class="card bg-base-300 shadow-xl text-black  ">
                        <figure class="px-10 pt-10">
                            <img src={manu} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Manufaturer Website</h2>
                            <p>This is an product management website using react</p>
                            <div class="card-actions justify-end">
                                <button hreg class="btn btn-primary"><a target="_blank" href="https://manufacturer-website-a12.web.app/">Live Link</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card bg-base-300 shadow-xl text-black  ">
                        <figure class="px-10 pt-10">
                            <img src={manu} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Manufaturer Website</h2>
                            <p>This is an product management website using react</p>
                            <div class="card-actions justify-end">
                                <button hreg class="btn btn-primary"><a target="_blank" href="https://manufacturer-website-a12.web.app/">Live Link</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card bg-base-300 shadow-xl text-black  ">
                        <figure class="px-10 pt-10">
                            <img src={manu} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Manufaturer Website</h2>
                            <p>This is an product management website using react</p>
                            <div class="card-actions justify-end">
                                <button hreg class="btn btn-primary"><a target="_blank" href="https://manufacturer-website-a12.web.app/">Live Link</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>

        </div>
    );
};

export default ProjectCarousel;