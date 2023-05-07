import '../App.css';

export default function Thumbnail({ image, name }) {
  return (
        <div className='link-item'>
            <a href="#todo" className="thumbnail--items">
                <img
                    src={image}
                    alt={name}
                    width="250px"
                    height="290px"
                    className="image"
                />
                <p className="item--name">{name}</p>
            </a>
        </div>
  );
}
