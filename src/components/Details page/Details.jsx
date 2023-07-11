import React from "react";
import Thumbnail from "../Thumbnail";
import {itemImages} from "../../items";
import PropTypes from "prop-types";
import ItemType from "../ItemTypes";
import {useParams} from "react-router-dom";
import { CartTypes } from "../../reducer/cartReducer";
import Button from '../Button/button'
import "./Details.css";

export default function Details({dispatch , items}) {
  // this will help display the image when clicked basing on it's id
  // condition rendering
  const {id} = useParams();
  const DetailItem = items.find((item) => item.itemId === id);

  const addItemToCart = () => {
    dispatch({type : CartTypes.ADD , itemId : DetailItem.itemId});
  };

  return (
    <div className="details-page">
      {DetailItem ? (
        <>
          <div className="details-component-sidebar">
            {items.map((item) => (
              <Thumbnail
                image={itemImages[item.imageId]}
                name={item.title}
                key={item.itemId}
                itemId={item.itemId}
              />
            ))}
          </div>
          <div className="details-component">
            {Boolean(DetailItem.salePrice) && (
              <div style={{fontSize: "20px", fontWeight: "bolder",marginLeft:"0rem"}} >
                On Sale !
              </div>
            )}
            <img
              src={itemImages[DetailItem.imageId]}
              alt={DetailItem.title}
              className="detail-image"
            />
            {""}
            <h2 style={{paddingTop: "5px"}}>{DetailItem.title}</h2>
            {!!DetailItem.description && (
              <h4 style={{fontFamily: "sans-serif", fontWeight: "lighter"}}>
                {DetailItem.description}
              </h4>
            )}
            {""}
            <div
              style={{
                paddingTop: "10px",
                fontWeight: "bolder",
                fontSize: "26px",
              }}
            >
              {" "}
              $ {(DetailItem.salePrice ?? DetailItem.price).toFixed(2)}
            </div>
          </div>
          <Button onClick={addItemToCart} />
        </>
      ) : (
        <div
          style={{
            fontWeight: "bolder",
            alignItems: "center",
            margin : '15rem 15rem 15rem 35rem'
          }}
        >
          Unknown Item
        </div>
      )}
    </div>
  );
}

Details.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
  dispatch : PropTypes.func.isRequired,
};
