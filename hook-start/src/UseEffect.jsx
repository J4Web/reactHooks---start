import axios from 'axios';
import {useState,useEffect} from 'react';

const a=[1,2,3,4,5,6,7]
function UseEffect()
{
    const [number,setNumber]=useState(1);
    const [movie,setMovie]=useState('');
   function handleChange(e){
        setNumber(e.target.value);
    }

    useEffect(()=>{
        const fetchingInfo=async ()=>{
            const res=await axios.get(`https://swapi.dev/api/films/${number}`)
            console.log(res);
            setMovie(res.data);
            // console.log(movie)
        }
        fetchingInfo()
    },[number])
 return <div>
 <h1>Choose the movie you want! <span>{number}</span></h1>
 <h2>Movie Name : {movie.title}</h2>
 <p>{movie.opening_crawl}</p>
     <select value={number} onChange={handleChange}>
         {a.map((num,i)=> <option key={i} value={num}>{num}</option>)}
     </select>

 </div>

}

export default UseEffect