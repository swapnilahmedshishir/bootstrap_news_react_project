
import "./App.css";
import ToastItem from "./Component/Toast/Toast";
import Pizza from "./Component/PizzaMenu/pizza"
import Data from "./generated.json";
import {Container} from 'react-bootstrap'
function App() {
  return <Container>
    <div>
    <Pizza MenuItem = {Data}></Pizza>
    <ToastItem></ToastItem>
    </div>
    
   
  </Container>;
}

export default App;
