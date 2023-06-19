import Header from "./components/header";
import Home from './components/Home';
import {items} from './items';
import './App.css';


function App() {
  return (
    <div className="app">
      <Header title="Code Cafe" region="Mayfair-Branch" />
      <Home items={items} />
    </div>
  );
}

export default App;
