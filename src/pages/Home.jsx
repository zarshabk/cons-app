import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillAccountBook, AiFillAlipayCircle, AiOutlinePieChart} from 'react-icons/ai'
const Home = () => {
  return (
    <>
    <div className='hero'>
         <div className='hero-content'>
              <h1>GET A FREE CONSULTACY WIT US FOR YOUR BETTER FUTURE</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi 
                incidunt odit fugiat odio? Cumque, maiores quasi? Saepe maiores ducimus beatae.
                </p>
                <br/>
               <div>
                <Link to={'register'} className='btn'>Contact NOW</Link>
               </div>
         </div>
    </div>

    <div className='hero2'>
         <div className='hero-content'>
             <h1>Explore Now to Get Offer</h1>
         </div>
    </div>

    <div className='container d-flex'>

         <div className='col-6 left'>
              <div className='icon'>
                    <AiFillAlipayCircle size={50}/>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque reprehenderit voluptatum repudiandae quibusdam repellat nam ab ex dolorem iure consectetur. Voluptatibus itaque numquam eligendi dolor rem tempore placeat beatae dolore, excepturi dignissimos id maxime laborum reiciendis recusandae
                 unde sed mollitia optio eveniet voluptatem, libero laboriosam, deserunt nobis. Sed, minima eum.</p>
         </div>
         <div className='col-6 right'>
            <div className='icon'>
                   <AiFillAccountBook size={50}/>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque reprehenderit voluptatum repudiandae quibusdam repellat nam ab ex dolorem iure consectetur. Voluptatibus itaque numquam eligendi dolor rem tempore placeat beatae dolore, excepturi dignissimos id maxime laborum reiciendis recusandae
                 unde sed mollitia optio eveniet voluptatem, libero laboriosam, deserunt nobis. Sed, minima eum.</p>
         </div>
    </div>

    <br/>

    <div className='container column'>
         <h1>About US</h1>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est beatae laborum animi consequatur magni consectetur quibusdam magnam nobis adipisci quidem et amet hic porro doloremque consequuntur tempore ducimus ratione dignissimos
           deleniti error voluptate, totam impedit pariatur cupiditate. Reprehenderit, ipsa qui.</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est beatae laborum animi consequatur magni consectetur quibusdam magnam nobis adipisci quidem et amet hic porro doloremque consequuntur tempore ducimus ratione dignissimos
           deleniti error voluptate, totam impedit pariatur cupiditate. Reprehenderit, ipsa qui.</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est beatae laborum animi consequatur magni consectetur quibusdam magnam nobis adipisci quidem et amet hic porro doloremque consequuntur tempore ducimus ratione dignissimos
           deleniti error voluptate, totam impedit pariatur cupiditate. Reprehenderit, ipsa qui.</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est beatae laborum animi consequatur magni consectetur quibusdam magnam nobis adipisci quidem et amet hic porro doloremque consequuntur tempore ducimus ratione dignissimos
           deleniti error voluptate, totam impedit pariatur cupiditate. Reprehenderit, ipsa qui.</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est beatae laborum animi consequatur magni consectetur quibusdam magnam nobis adipisci quidem et amet hic porro doloremque consequuntur tempore ducimus ratione dignissimos
           deleniti error voluptate, totam impedit pariatur cupiditate. Reprehenderit, ipsa qui.</p>
    </div>
    
    </>
  )
}

export default Home