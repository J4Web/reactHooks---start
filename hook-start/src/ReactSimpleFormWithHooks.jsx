import {useState} from 'react';
function ReactSimpleFormWithHooks()
{
    const [val,setChangeValue]=useState('');
    function ChangeValue(e)
    {
        setChangeValue(e.target.value);
    }
    return <div>
    <h1>{val}</h1>
        <form>
            <input type="text"
            value={val}
            onChange={ChangeValue}
            />
        </form>
    </div>

}
export default ReactSimpleFormWithHooks;