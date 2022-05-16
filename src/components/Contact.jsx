import React from 'react'

function Contact() {
  return (
   
    <div name="contact" className=' w-full h-screen bg-[#3D5A73] flex justify-center items-center p-4'>
         
    <form  method='POST' action="https://getform.io/f/b94dca8d-c8a5-4d9d-a60a-c1b61ce2f8c5" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-white text-white'>Contact</p>
            <p className='text-white py-4'>Get in touch using the form below</p>
        </div>

        <input  className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
        <input className= 'my-4 p-2 bg-[#ccd6f6]'type="text" placeholder='Email' name='email'/>
        <textarea  className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-white hover:border-black hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Get in touch !</button>
    </form>


</div>


    
  )
}

export default Contact