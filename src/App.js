import logo from './logo.svg';
import './App.css';
import { CardGroup } from './fullsite/Card';
import { NewProducts } from './fullsite/NewProducts';
import { Ideas } from './fullsite/Ideas';
import { Footersite } from './fullsite/footer';
import Start from './fullsite/start';
import Line from './fullsite/line';
const components = [
  { img: "Component 19.png" },
  { img: "Component 20.png"},
  { img: "Component 21.png" },
  { img: "Component 22.png"},
  { img: "Component 23.png"},
  { img: "Component 24.png"},
  { img: "Component 25.png"},
  { img: "Component 26.png"},
  { img: "Component 27.png"},
  { img: "Component 28.png"},
  { img: "Component 29.png"},
  { img: "Component 30.png"},
  { img: "Component 31.png"},
  { img: "Component 32.png"},
  { img: "Component 33.png"},
  { img: "Component 34.png"},
  { img: "Component 35.png"},
  { img: "Component 36.png" }
];

function App() {
  
  return (
    <div id="fullsite">
    <Start></Start>
   
    <div id="container">
    <NewProducts></NewProducts>
    <CardGroup arr={components}></CardGroup>
    <Ideas></Ideas>
    
   </div>
   <Footersite></Footersite>
    </div>
  );
}

export default App;
