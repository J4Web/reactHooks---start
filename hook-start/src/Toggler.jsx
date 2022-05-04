
import UseToggle from './hooks/UseToggle';

function Toggler() {
    const [isHappy,doToggle]=UseToggle(false);
    //adding second toggler here
    const [isApple,setdoToggle]= UseToggle(true);
  return (
    <div><h1 onClick={doToggle}>
    {isHappy? '😂': '😬'}

    </h1>
    <h2 onClick={setdoToggle}>
        {isApple? '🍎': '🍌'}
    </h2></div>
  )
}

export default Toggler

//so look how clunky the code is, and how much repeated things are there we can do better than this!!!