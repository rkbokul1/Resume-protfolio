import React from 'react';
// import JotformEmbed from 'react-jotform-embed';

const ContactUs = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl text-center mt-16'>Contact Us</h1>

            <div className='grid justify-center'>
                <form>
                    <input type="text" placeholder="Your name" class="input input-bordered w-full max-w-xs mt-3 text-black" />
                    <br />
                    <input type="email" placeholder="your email" class="input input-bordered w-full max-w-xs mt-3 text-black" />
                    <br />
                    <textarea class=" w-full max-w-xs mt-3 text-black" name="" id="" cols="30" rows="10" placeholder='type your message here'></textarea>
                    <br />
                    <input className='btn btn-primary' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;