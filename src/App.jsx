import axios from "axios";
import Header from "./components/header";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cart from "./components/cart/cart";
import {useEffect, useState , useReducer} from "react";
import "./App.css";
import NotFoundPage from "./components/NotFound_page/NotFoundPage";
import Details from "./components/Details page/Details";
import { cartReducer , initialCartState } from "./reducer/cartReducer";

function App() {
  const [items, setItems] = useState([]);

  const [ cart , dispatch ] = useReducer(cartReducer , initialCartState);

  // const addToCart = (itemId) => dispatch({type : CartTypes.ADD , itemId});
 
  // first way to fetch the httpRequests using then/catch blocks
  // useEffect(()=>{
  //     // this will render the backend from a remote repository therefore
  //     // will require internet access always to fetch the api
  //     // axios.get("https://code-cafe-backend.onrender.com/api/items")
  //     axios.get('http://localhost:3030/api/items')
  //     .then((response) => setItems(response.data))
  //     .catch(console.error);
  // },[]);

  // second way to fetch the httpRequest with axios alongside async/await and try/catch blocks
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3030/api/items");
        setItems(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Header title="Code Cafe" region="Mayfair-Branch" cart={cart} />
      {items.length === 0 
        ? (<div
          style={{
            fontWeight: "bolder",
            alignItems: "center",
            marginLeft: "35rem",
            marginTop: "15rem",
          }}
          >
          Loading....
          </div> )
        : (
            <Routes>
              <Route path="/" element={<Home items={items} />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/details" element={<Details items={items}  dispatch={dispatch} />}>
                <Route path=":id" element={<Details items={items}  />} />
                <Route index element={<div>No Item Selected</div>} />
              </Route>
              <Route path="/cart" element={<Cart  cart={cart} items={items} dispatch={dispatch} />} />
            </Routes>
          )}
      </Router>
  );
}

export default App;
