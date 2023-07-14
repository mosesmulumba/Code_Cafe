import "./cart.css";
// import PropTypes from "prop-types";
// import ItemType from '../ItemTypes';
import {CartTypes} from "../../reducer/cartReducer";
import CartRow from "../CartRow";

function Cart({cart, dispatch , items }) {
  const removeItem = () => {
    dispatch({type: CartTypes.REMOVE, itemId: item.itemId});
  };
  return (
    <div className="carttop">
      <div className="cart--title">Your Cart</div>
      {cart.length === 0 ? (
        <div style={{alignItems: "center"}}>Your Cart is empty</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartRow
                key={item.itemId}
                cartItem={item}
                items={items}
                dispatch={dispatch}
              />
            ))}
          </tbody>
          <td>
            <button type="button" onClick={removeItem}>x</button>
          </td>
        </table>
      )}
    </div>
  );
}

// Cart.propTypes = {
//   cart: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       quantity: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

export default Cart;
