import React,{useState} from 'react'

function Toggler() {
    const [isHappy,setIsHappy]=useState(false);
    const setHappy=()=>
    {

        setIsHappy(!isHappy);
    }
  return (
    <div><h1 onClick={setHappy}>
    {isHappy? '😂': '😬'}

    </h1></div>
  )
}

export default Toggler