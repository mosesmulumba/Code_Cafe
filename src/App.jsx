import axios from "axios";
import Header from "./components/header";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import "./App.css";
import NotFoundPage from "./components/NotFoundPage";
import Details from "./components/Details";

function App() {
  const [items, setItems] = useState([]);

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
      <Header title="Code Cafe" region="Mayfair-Branch" />
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
              <Route path="/details" element={<Details items={items} />}>
                <Route path=":id" element={<Details items={items} />} />
                <Route index element={<div>No Item Selected</div>} />
              </Route>
            </Routes>
          )}
      </Router>
  );
}

export default App;
