import {useState} from 'react';
function UseToggle(initialVal=false){


    const [idk,setIdk]=useState(initialVal);
    const doToggle=()=>{
        setIdk(!idk)
    }

    return [idk,doToggle]; 

}
export default UseToggle;

//here we are making a custom hook! what does that mean ? well you make your own hook with a certain feature.
//Your custom hook is just like any other hoook it returns refereace to a piece of state and a function to perform/update that piece of state