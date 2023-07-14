import PropTypes from 'prop-types';
import ItemType from './ItemTypes';

function CartRow({cartItem, items}) {

    const item = items.find((i) => i.itemId === cartItem.itemId);

    return ( 
        <tr key={item.itemId}>
                  <td>{cartItem.quantity}</td>
                  <td>{item.itemId}</td>
                  <td>
                    $
                    {((item.salePrice ?? item.price) * cartItem.quantity).toFixed(2)}
                  </td>
                  
        </tr>
     );
}

CartRow.propTypes = {
    cartItem : PropTypes.shape({
        itemId : PropTypes.string.isRequired,
        quantity : PropTypes.number.isRequired,
    }).isRequired,
    items : PropTypes.arrayOf(ItemType).isRequired,
}

export default CartRow;