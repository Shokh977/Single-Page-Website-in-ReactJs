import React, { Component } from 'react';

const NewsLetter = () => {
    return ( 
    <div className='w-full py-16 text-white flex justify-center'>
        <div className="max-w-[1240px] max-auto grid lg:grid-cols-3 space-evenly">
            <div className='lg:col-span-2 my-5 m-4'>
                <h1 className='md:text-4xl sm:text-3xl text-xl '>Want tips and tricks to optimize your project?</h1>
                <p className="">Sign up to our Newsletter and stay up to date.</p>
            </div>
              <div className="m-4">
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-dm text-black' 
                    type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 
                    mx-auto ml-2 px-6 py-3 text-white 
                    hover:bg-[#01a773]'>Notify Me</button>
                </div>
                <p className="">
                We care about the protection of your data. Read our  
                 <a className='text-[#00df9a]' href="#"> Privacy Policy.</a> 
              </p>
              </div>
              
        </div>
    </div> );
}
 
export default NewsLetter;