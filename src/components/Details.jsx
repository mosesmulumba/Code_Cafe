import React from "react";
import Thumbnail from "./Thumbnail";
import {itemImages} from "../items";
import PropTypes from "prop-types";
import ItemType from "./ItemTypes";
import {useParams} from "react-router-dom";
import "./Details.css";

export default function Details({items}) {
  // this will help display the image when clicked basing on it's id
  const {id} = useParams();
  const DetailItem = items.find((item) => item.itemId === id);

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
              $ {(DetailItem.salePrice || DetailItem.price).toFixed(2)}
            </div>
          </div>
        </>
      ) : (
        <div
          style={{
            fontWeight: "bolder",
            alignItems: "center",
            marginLeft: "35rem",
            marginTop: "15rem",
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
};
