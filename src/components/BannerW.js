import React from 'react'
import nfb from "../static/images/nfb.png";

export default function BannerW() {
  return (
    <div className='flex justify-center items-center flex-wrap'>
        <div className='flex flex-col items-start flex-wrap ml-10 mt-10'>
            <p className='text-white text-5xl font-semibold'>The <span className='text-teal-400'>Future</span> of finance</p>
            <p className='text-white text-5xl font-semibold'>is Non-Fungible</p>
            <p className='text-white'>The official digital financial product fro CD3Fi & CinemaDraft</p>
            <button className=' bg-teal-400 text-blue-900 font-semibold px-9 py-3 rounded-xl hover:bg-teal-200'>GET YOUR NFB</button>
        </div>
        <div>
            <img src={nfb}/>
        </div>
    </div>
  )
}
