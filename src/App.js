import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators} from "./state/index.js";

function App() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch()

  const {depositeMoney, withdrawMoney}= bindActionCreators(actionCreators, dispatch)
  console.log(state);
  return (
    <div className="App">
      <h1> {state.account}</h1>
      <button onClick={() => depositeMoney(1000)}>Deposite</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
