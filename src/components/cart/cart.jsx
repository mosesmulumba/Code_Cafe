import  './cart.css';

function Cart({cart}) {
    return ( 
        <div className="carttop">
           <div className="cart--title">Your Cart</div>
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
                <tr key={item.itemId}>
                <td>{item.quantity}</td>
                <td>{item.itemId}</td>
                <td>{item.price}</td>
                </tr>
                ))}
             </tbody>
            </table> 
        </div>
     );
}

export default Cart;