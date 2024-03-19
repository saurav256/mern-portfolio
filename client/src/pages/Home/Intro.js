import React from 'react'

function intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 w-3/4 py-10'>

        <h1 className='text-white'> Hello</h1>
        <h1 className='text-7xl text-secondary font-semibold'>SAURAV,ASHUTOSH,NARESH</h1>
        <h1 className='text-6xl text-white font-semibold'> This is a team project</h1>
        <button className='border-2 border-tertiary text-white px-10 py-5 rounded'>GET STARTED</button>

    </div>
  )
}

export default intro