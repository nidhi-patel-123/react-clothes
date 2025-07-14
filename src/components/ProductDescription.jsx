import React from 'react'

function ProductDescription() {
    return (
        <div className='ring-1 ring-slate-900/10 rounded-lg'>
            <div className='flex gap-3'>
                <button className='medium-14 p-3 w-32 border-b-2 border-secondary'>Desciption</button>
                <button className='medium-14 p-3 w-32'>Care Guide</button>
                <button className='medium-14 p-3 w-32'>Size Guide</button>
            </div>
            <hr className='h-[1px] w-full' />
            <div className='flex flex-col gap-3 p-3'>
                <div>
                    <h5 className='h5 '>Details</h5>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem totam, perspiciatis explicabo fuga dolores praesentium tempore adipisci mollitia omnis est numquam dolor iure neque autem quod minima reprehenderit doloribus?</p>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti veniam nam recusandae saepe esse!</p>
                </div>
                <div>
                    <h5 className='h5'>Benefit</h5>
                    <ul className='list-disc pl-5 text-sm text-gray-30 flex flex-col gap-1'>
                        <li>High-Quality Materials ensure long-lasting durablity and comfort</li>
                        <li>High-Quality Materials ensure long-lasting durablity and comfort Lorem.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.   </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription