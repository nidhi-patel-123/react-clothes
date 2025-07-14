import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import banner from "../assets/banner.png"

function Banner() {
  return (
    <section className='mx-auto max-w-[1900px]'>
      <div className='flexBetween bg-white'>
        {/* left side */}
        <div className='hidden lg:block flex-1 px-6 xl:px-12'>
          <h2 className='h2 uppercase'>Affordable style,Timeless Appeal </h2>
          <h3 className='h4 uppercase'>transfrom your closet today</h3>
          <div className='flex mt-5'>
            <Link to={'/collection'} className='btn-secondary !py-0 !pr-0 rounded-full flexCenter gap-x-2 group'>
              Explore Collection
              <FaArrowRight  className='bg-white text-tertiary rounded-full h-9 w-9 p-3 m-[3px] group-hover:-rotate-[20deg] transition-all duration-500'/>
            </Link>
          </div>
        </div>
        {/* img side */}
        <div className='flex-1'>
          <img src={banner} alt="" className='rounded-tl-3xl rounded-bl-3xl' />
        </div>
      </div>
    </section>
  )
}

export default Banner