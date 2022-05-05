import {useState} from 'react';
function CustomHooksForm(initialVal='')
{
    const [val,setVal]=useState(initialVal);
   function handleChange(e)
    {
        setVal(e.target.value);
    }
    function refresh(){
        setVal('');
    }
    function backToTheInitial()
    {
        setVal(initialVal);
    }
    return [val,handleChange,refresh,backToTheInitial];
}
export {CustomHooksForm};