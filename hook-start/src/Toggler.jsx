import React,{useState} from 'react'

function Toggler() {
    const [isHappy,setIsHappy]=useState(false);
    //adding second toggler here
    const [isApple, setIsApple]= useState(true);
    const setHappy=()=>
    {

        setIsHappy(!isHappy);
    }
    const setFruit=()=>
    {
        setIsApple(!isApple);
    }
  return (
    <div><h1 onClick={setHappy}>
    {isHappy? '😂': '😬'}

    </h1>
    <h2 onClick={setFruit}>
        {isApple? '🍎': '🍌'}
    </h2></div>
  )
}

export default Toggler