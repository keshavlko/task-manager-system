import Image from 'next/image';
import React from 'react';

export default function MyNetworkPage() {
  return (
    <div className="bg-black flex h-screen justify-center items-center">
      <div className='bg-white border border-solid border-yellow-500 border-4 h-40' style={{ width: "555px"}}>
        <div className='w-1/2'>
          <Image alt='Switzerland Image' src="/Switzerland.jpg" width={80} height={80} className='mb-2 rounded-full'/>
          <div>
            Tailwind CSS
            <p>by Hitesh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
