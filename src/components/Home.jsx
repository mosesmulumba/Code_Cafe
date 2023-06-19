import React from "react";
import Thumbnail from "./Thumbnail";
import { itemImages} from '../items';
import PropTypes from 'prop-types';


export default function Home({items}){
    return(
        <div className="App">
          {items.map((item)=>(
            <Thumbnail 
            image={itemImages[item.imageId]} 
            name={item.title} 
            key={item.itemId} />
          ))}
      </div>
    )
}

Home.propTypes = {
    items : PropTypes.arrayOf(
      PropTypes.shape({
        itemId : PropTypes.string.isRequired,
        imageId : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired,
        price : PropTypes.number.isRequired,
        description : PropTypes.string,
        salePrice : PropTypes.number,
      }),
    ).isRequired,
};