import Thumbnail from "./components/Thumbnail";
import Header from "./components/header";
import cap from './items/cap cake.jpg';
import cappucino from './items/cappuccino.avif';
import coffee from './items/coffee.jpg';
import cookie from './items//cookie.jpg';
import donuts from './items/donuts.jpg';
import frenchpress from './items/french press.jpg';
import icedcoffee from './items/iced coffee.webp';
import './App.css';

const itemsArray = [
  {image :cap , name:"cap" , id : 1 },
  {image :cappucino , name:"cappucino" , id : 2 },
  {image :coffee , name:"coffee" , id : 3 },
  {image :cookie , name:"cookie" , id : 4 },
  {image :donuts , name:"donuts" , id : 5 },
  {image :frenchpress , name:"frenchpress" , id : 6 },
  {image :icedcoffee , name:"icedcoffee" , id : 7 }
];

function App() {
  return (
    <div className="app">
      <Header title="Code Cafe" region="Mayfair-Branch" />
      <div className="App">
          {itemsArray.map((data)=>(
            <Thumbnail image={data.image} name={data.name} key={data.id} />
          ))}
      </div>
    </div>
  );
}

export default App
