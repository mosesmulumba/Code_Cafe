import '../App.css';
import PropTypes from 'prop-types';

export default function Thumbnail({ image, name }) {
  return (
        <div className='link-item'>
            <a href="#todo" className="thumbnail--items">
                <img
                    src={image}
                    alt={name}
                    width="220px"
                    height="220px"
                    className="image"
                />
            </a>
            <div className='item--title'>
                <p className="item--name">{name}</p>
            </div>
        </div>
  );
}

Thumbnail.propTypes = {
    image : PropTypes.string.isRequired,
    name :  PropTypes.string.isRequired,
}
