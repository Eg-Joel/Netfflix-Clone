import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube';
import "./RowPost.css"
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
function RowPost(props) {
const [movies, setmovies] = useState([])
const [urlid, seturlid] = useState(null)

  useEffect(() => {
  axios.get(props.url).then(response=>{
  setmovies(response.data.results)
  })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
    const handleMovie =(id)=>{
   
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        seturlid(response.data.results[0])
      }else{
        console.log('no videos');
      }

    })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
         {movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        
         )}
        
        </div>
        {urlid && < YouTube videoId={urlid.key} opts={opts} />}
       
    </div>
  )
}

export default RowPost