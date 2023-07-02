import {Link} from "react-router-dom";
import "../App.css";
import PropTypes from "prop-types";

export default function Thumbnail({image, name, itemId}) {
  return (
    <Link className="link-item" to={`/details/${itemId}`}>
      <img
        src={image}
        alt={name}
        width="220px"
        height="220px"
        className="image"
      />
      <div className="item--title">
        <p className="item--name">{name}</p>
      </div>
    </Link>
  );
}

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
