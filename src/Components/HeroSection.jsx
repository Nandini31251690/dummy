import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const HeroSection = () => {
  return (
    <div className='mt-20 h-30 bg-white flex justify-between items-center px-28'>
      <div className=" bg-lime-200"> 
      <div className=' font-bold text-5xl  '> Kritika-Enterprises</div>
       <h2 className="text-2xl font-semibold text-gray-700 mt-9">
      We sell {' '}
      <span className=" text-blue-700">
        <TypeAnimation
          sequence={[
            'Laptops', 1000,
            'Medical Equipments ', 1000,
            'Monitors', 1000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ display: 'inline-block' }}
        />
      </span>{' '}
      
    </h2>
      </div>
      <div className="  bg-slate-500  "> 
      <div className=''>
        image
      </div>
      </div>
    </div>
  )
}

export default HeroSection
 