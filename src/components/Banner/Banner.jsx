import React, { useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import { useEffect } from 'react'
import axios from '../../axios'
import "./Banner.css"
function Banner() {
  const [movie, setmovie] = useState()
{
  window.onload =function(){
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{

    const random= Math.floor(Math.random()*response.data.results.length-1)

    })
  }}
  useEffect(() => {
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[0]);
    
    setmovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
   })
  
  }, [])
  return (
    
    <div
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
     className='banner'>
      <div className='content'>
        <h1 className='title'>{movie?movie.title:""}</h1>
        <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie?movie.overview:""}</h1>
        </div> 
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner