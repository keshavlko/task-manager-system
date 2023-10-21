import React from 'react';

export default function MyNetworkPage() {
  return (
    <div className="bg-black flex h-screen justify-center items-center">
      <div className='bg-white border border-solid border-yellow-500 border-4 h-40' style={{ width: "555px"}}>
        <div className='w-1/2'>
          <img
            src="https://wonderfulengineering.com/wp-content/uploads/2016/01/Switzerland-wallpaper-3.jpg"
            alt="Image"
            className="mb-2 h-20 w-20 rounded-full"
          />

          <div>
            Tailwind CSS
            <p>by Hitesh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
