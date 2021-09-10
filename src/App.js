import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
import App1 from "./app1.js"

function App() {
  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
<>
<div className="container">
<h1>Increment/Decrement counter </h1>
<div>https://www.youtube.com/watch?v=ww37AWWtL4k</div>
<div className="quantity">
<button className="quantity_minus" title="Decrement"onClick={()=>dispatch(decNumber(10))}><span> - </span> </button>
<input name="quantity" type="text" className="quantity_input" value={myState} />
<button className="quantity_plus" title="Increment" onClick={()=>dispatch(incNumber(8))}><span> + </span></button>
</div>
<App1/>
</div>
</>
  );
}

export default App;
