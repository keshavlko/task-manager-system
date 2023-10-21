import React from 'react';

export default function About() {
  return (
    <div className="bg-white h-screen">
      <div className="border border-gray-500 border-.5 border-solid h-14 w-full flex justify-evenly items-center">
        <div>VLOG</div>
        <div className="flex ml-40 space-x-16">
          <a href='#' className="hover:underline">Home</a>
          <a href='#' className="hover:underline">Modules</a>
          <a href='#' className="hover:underline">Posts</a>
          <a href='#' className="hover:underline">Modules</a>
          <a href='#' className="hover:underline">Pages</a>
          <a href='#' className="hover:underline">Mega Menu</a>
          <a href='#' className="hover:underline">Features</a>
        </div>
        <div className='ml-7 '>
          <input className="rounded-full pl-2 border border-gray-300 border-1" placeholder="search" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div className='flex'>
        <img src="https://thumbs.dreamstime.com/b/big-ben-london-autumn-leaves-32915756.jpg" className='w-3/5 h-96' />
        <div className="flex flex-col w-2/5">
          <img src="https://i.pinimg.com/originals/c0/96/41/c096419ccadc0edc42448e81bfc755f3.jpg" className="h-48" />
          <img src="https://img.freepik.com/premium-photo/basket-cherries-wooden-table-with-book-background_865967-312049.jpg" className="h-48" />
        </div>
      </div>
      <div className="">
      <div className="flex flex-col"> 
      <h1 className='text-lg'>Most liked Playlist</h1>
      <div className='h-52 w-96 flex flex-col'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.s
        <button className="border border-2 border-gray-300 border-solid mt-20 mb-20 ml-0 mr-20">View All</button>
        </div>
        <div>
          <div>

          </div>
        </div>
      </div>
      </div>
    </div>
    
  );
}
