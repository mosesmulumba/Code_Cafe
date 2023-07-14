import {Link} from "react-router-dom";
import {GiCoffeeCup} from "react-icons/gi";
import Cart from "../items/cart.jpg";
import "../App.css";
import PropTypes from "prop-types";

export default function Header({region, title, cart}) {

  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="header-component">
      <Link to="/" className="header">
        <GiCoffeeCup size="70px" className="icon--coffee" />
        <div className="headings">
          <h1 className="heading">{title}</h1>
          <h2 className="heading--1">{region}</h2>
        </div>
      </Link>
      <Link to="/cart" style={{borderRadius: "15px"}}>
        <div className="badge">{cartQuantity}</div>
        <img
          src={Cart}
          alt="cart-logo"
          width="40px"
          height="40px"
          style={{
            backgroundColor: "white",
            borderColor: "black",
            border: "1px solid #ffc003",
            borderRadius: "5px",
          }}
        />
      </Link>
    </div>
  );
}

Header.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  region: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
