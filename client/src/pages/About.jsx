import React from 'react'

const About = () => {
  return (
       <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About <span className='text-red-700'>Dreamland</span> Estate</h1>
      <p className='mb-4 text-slate-700'>Dreamland Estate is a leading real estate agency that specializes in helping clients buy, sell, 
      and rent properties in the most desirable neighborhoods.
       Our team of experienced agents is dedicated to providing exceptional service and 
       making the buying and selling process as smooth as possible.</p>
      <p className='mb-4 text-slate-700'>
      Our mission is to help our clients achieve their real estate goals by providing expert advice,
       personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property,
        we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry,
       and we are committed to providing the highest level of service to our clients.
        We believe that buying or selling a property should be an exciting and rewarding experience,
         and we are dedicated to making that a reality for each and every one of our clients.</p>  
         <div className='flex justify-center items-center gap-6 sm:gap-12 h-[380px] w-full max-w-[800px] mx-auto'>
  <div className='flex flex-col items-center'>
    <img
      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      className='rounded-lg mb-2 w-42 h-40 object-cover'
    />
    <p className='text-slate-700 text-semibold'>Ceo & founder- <span className='text-bold'>Ross Geller</span></p>
  </div>

  <div className='flex flex-col items-center'>
    <img
      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      className='rounded-lg mb-2 w-32 h-40 object-cover'
    />
    <p className='text-slate-700 text-semibold'>Co-Founder- <span className='text-bold'>Monica Geller</span></p>
  </div>

  <div className='flex flex-col items-center'>
    <img
      src="https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      className='rounded-lg mb-2 w-32 h-40 object-cover'
    />
    <p className='text-slate-700 text-semibold'>Marketing Head- <span className='text-bold'>Matthew Perry</span></p>
  </div>
</div>
    
    </div>
   
  )
}

export default About
