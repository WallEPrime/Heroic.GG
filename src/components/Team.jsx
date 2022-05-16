import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react'
import Logo from "../assets/logo.png"

function Team() {

    const[players, setPlayers] = useState([])

    useEffect( () =>{

            fetchData()

    },[])
/* Fetch data from the json file */
    const fetchData = async () => {
        const{data} = await axios.get("https://api.jsonbin.io/b/6276a2a1019db46796974e46/4")
/*https://jsonbin.io/6276a2a1019db46796974e46/4*/
        setPlayers(data)
    }



  return (
    <div name="team" className=' mx-auto pt-4 '> 

<h1 className='text-center text-6xl'>THE TEAM</h1>
  


<div class="flex  flex-wrap p-3 mx-3 overflow-hidden sm:-mx-4 md:-mx-6 lg:-mx-6 xl:-mx-8 text-black">

{players.map(players =>(
/* For each object create a div with the wanted items */
        <div className='bg-white   my-1 px-3 w-1/2 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-6 md:px-6 md:w-1/3 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3' key={players.id}>

            <img className='mx-auto' src={players.profilePic} alt="" />
            <h2 className='pt-4 text-center text-3xl'>{players.name}</h2>
            <div className='pt-3'>
            <p className='pt-4 text-justify'>{players.About}</p>
            </div>
         


        </div>
        
))}


{/*
<div class=" bg-black  my-1 px-3 w-1/2 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-6 md:px-6 md:w-1/3 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3">
  <img src={Logo} alt="" />
  <p className='pt-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis molestias, quae natus sequi beatae qui recusandae perspiciatis deleniti alias repellat architecto libero officia exercitationem, esse inventore, possimus sed consectetur.</p>
</div>

<div class=" bg-black  my-1 px-3 w-1/2 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-6 md:px-6 md:w-1/3 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3">
  <img src={Logo} alt="" />
  <p className='pt-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis molestias, quae natus sequi beatae qui recusandae perspiciatis deleniti alias repellat architecto libero officia exercitationem, esse inventore, possimus sed consectetur.</p>
</div>

<div class=" bg-black  my-1 px-3 w-1/2 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-6 md:px-6 md:w-1/3 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3">
  <img src={Logo} alt="" />
  <p className='pt-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis molestias, quae natus sequi beatae qui recusandae perspiciatis deleniti alias repellat architecto libero officia exercitationem, esse inventore, possimus sed consectetur.</p>
</div>
<div class=" bg-black  my-1 px-3 w-1/2 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-6 md:px-6 md:w-1/3 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3">
  <img src={Logo} alt="" />
  <p className='pt-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis molestias, quae natus sequi beatae qui recusandae perspiciatis deleniti alias repellat architecto libero officia exercitationem, esse inventore, possimus sed consectetur.</p>
</div>

<div class=" bg-black  my-1 px-3 w-1/2 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-6 md:px-6 md:w-1/3 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3">
  <img src={Logo} alt="" />
  <p className='pt-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis molestias, quae natus sequi beatae qui recusandae perspiciatis deleniti alias repellat architecto libero officia exercitationem, esse inventore, possimus sed consectetur.</p>
</div>

<div class=" bg-black  my-1 px-3 w-1/2 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-6 md:px-6 md:w-1/3 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3">
  <img src={Logo} alt="" />
  <p className='pt-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis molestias, quae natus sequi beatae qui recusandae perspiciatis deleniti alias repellat architecto libero officia exercitationem, esse inventore, possimus sed consectetur.</p>
</div> */}

</div> 


    </div>
  )
}

export default Team

