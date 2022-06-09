import React from 'react';
import image from './../../img/600x600 1.png';

const About = () => {
    return (
        <div>
            <section id='about' className='container mx-auto mt-16'>

                <h1 className='text-center mb-14 text-5xl'>About Me</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                     
                    <div className='order-1 md:order-2'>

                        <p>Over 1+ years of working experience as a junior MERN stack web developer with a solid understanding of front-end technology, Restful web applications, and Database design.

                            • Strong Knowledge of MERN technology for web applications.
                            • Used Reat.js for the client-side and Node.js (Express.js) for the Back-end side and MongoDB (no SQL) for the Database.
                            • Deep understanding of advanced Javascript especially in ES-6 such as function, closure, scope, etc.
                            • Strong knowledge of dom manipulations, Grid controls and CSS properties.
                            • Deep knowledge of Object-Oriented Programming and Functional Programming.
                            • Extensive Knowledge of Restful web service with node,js ( Express.js ).
                            • Familiar with Typescript, Redux and next js</p>

                    </div>
                    <div className='flex justify-center'>
                        <img className='rounded-full w-6/12 text-center' src={image} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;