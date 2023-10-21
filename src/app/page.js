import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen bg-black text-white '>
      <p>Home Screen</p>
        <div class ="p-6 max-w-sm mx-auto bg-white text-black rounded-xl" >
          <div >
            <img src='https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg'></img>
          </div>
            <div>
            tailwindcss
            <p>by hitesh</p>
          </div>
      </div>
    </div>
  )
}
