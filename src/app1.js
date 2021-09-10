import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux";

function App1() {
  const myState=useSelector((state)=>state.changeTheNumber);
  
  return (
<>
<div ><h1>{myState}</h1></div>

</>
  );
}
export default App1;