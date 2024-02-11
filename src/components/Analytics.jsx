import React from 'react';
import laptop from '../Assets/laptop.png';

const Analytics = () => {
    return (
      <div className="w-full bg-white py-16 px-4">
 <div className='max-w[1240px] mx-auto grid md:grid-cols-2'>
           <img className='w-[500px] mx-auto my-4'
           src={laptop} alt="/"
           />
           <div className='flex flex-col justify-center'>
              <p className='text-[#00fd9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>Manage Data Analytics Centrally</h1>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Quia velit atque perspiciatis,
                 voluptatem itaque consectetur rem, perferendis nihil harum 
                 repudiandae molestiae similique labore aliquam, consequatur cupiditate 
                 placeat dolorum! Cum aspernatur iusto optio adipisci, recusandae voluptates dicta
                  accusamus vero ea laborum et architecto velit magni iure
                 distinctio reiciendis qui odio facere?
              </p>
              <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-white hover:text-white hover:bg-[#01a773]'>Get Started</button>

           </div>
        </div>      
     </div>

    )
       
}
 
export default Analytics;