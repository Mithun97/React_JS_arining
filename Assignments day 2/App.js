import logo from './logo.svg';
import './App.css';
// import Greet, {ObjectDestructuring} from './Components/Greet';
// import GreetClass from './Components/GreetClass';
// import Counter from './Components/Counter'
// import User from './Components/User';
import OrderDetails from './Components/OrderStatus';
import NumberState from './Components/NumberState';

function App() {
  return (
    <div className="App">
         
     <OrderDetails/>
    <NumberState/>
    </div>
  );
}

export default App;
