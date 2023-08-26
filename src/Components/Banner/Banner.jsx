import React, { useEffect, useState } from 'react'
import './banner.scss'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/constant'
const Banner = () => {
  const [movie, setMovie] = useState()
  useEffect(()=>{

    //fecting trending movie
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data);
      setMovie(response.data.results[Math.floor(Math.random()*10)])

  }).catch((err)=>{
    console.log(err);
  })

  },[])
  return (
    <div className='banner'  style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path:""})`}}>
     
        <div className="content">
            <h1 className='title'>{movie?.title}</h1>
            <div className="banner__buttons">
                <button className='button'>Play</button>
                <button className='button' >My List</button>
            </div>
            <h1 className='description'>{movie?.overview}</h1>
          <div className="fade__bottom"></div>
        </div>
    </div>
  )
}

export default Banner