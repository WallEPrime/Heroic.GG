import React from 'react'
import Jersey from '../assets/jersey.png'

function Merchandise() {
  return (
    <div>

<h1 className='text-center text-4xl p-10'> MERCHANDISE</h1>

<div  name="merchandise" class="flex flex-wrap  px-4 text-justify -mx-2 overflow-hidden sm:-mx-4 md:-mx-4 lg:-mx-4 xl:-mx-4">

<div class="my-2 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">
  <img  className='mx-auto' src={Jersey} alt="" />
</div>

<div class="my-2 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">

<h2 className='text-center text-3xl p-4'>HEROIC JERSEY</h2>

<p>
 Feel like part of the team and show your style with this new pro jersey from Heroic.</p>
<span className='p-2'></span>

<p>A white jersey with red accents features the timeless Heroic logo sitting proudly on the chest. This jersey is made from a technologically advanced, high quality, lightweight and breathable polyester, ensuring maximum comfort and no distractions during play.
</p>
<p className='pt-4 font-bold'>
Product Benefits:
<ul className='p-2 font-light'>
    <li>- Official Heroic product</li>
    <li>- High density sublimation, design will never crack or peel.</li>
    <li>- 100% polyester</li>
    <li>- Sponsors on back and front are subject to change</li>
</ul>




 </p>
 <button className='text-black border-2 hover:bg-white hover:border-black  px-4 py-3 my-8 mx-auto flex items-center'><a href="https://heroic.wearenations.com/">Shop now !</a></button>

</div>

</div>


    </div>
  )
}

export default Merchandise