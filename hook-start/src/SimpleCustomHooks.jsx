
import {CustomHooksForm} from './hooks/CustomHooksForm'
function SimpleCustomHooks()
{
    const [val,setHandleTrack,setRefresh,setInitial]=CustomHooksForm('pick');

    function idkWhatToDoBtnRe(e){
        e.preventDefault()
        setRefresh()
    }
    function idkWhatToDoBtnIn(e){
        e.preventDefault()
        setInitial()
    }
    return <div>
    <h1>{val}</h1>
        <form>
            <input
                value={val}
                onChange={setHandleTrack}
            />
            <button onClick={idkWhatToDoBtnRe} >
            refresh!
            </button>
            <button onClick={idkWhatToDoBtnIn}>Back to the initialVal</button>
        </form>
    </div>
}

export default SimpleCustomHooks;