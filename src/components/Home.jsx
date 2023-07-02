import React from "react";
import Thumbnail from "./Thumbnail";
import { itemImages} from '../items';
import PropTypes from 'prop-types';
import ItemType from "./ItemTypes";


export default function Home({items}){
    return(
        <div className="App">
          {items.map((item)=>(
            <Thumbnail 
            image={itemImages[item.imageId]} 
            name={item.title} 
            key={item.itemId}
            itemId={item.itemId} />
          ))}
      </div>
    )
}

Home.propTypes = {items : PropTypes.arrayOf(ItemType).isRequired,};