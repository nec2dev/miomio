import "./Item.css";
import {Link} from 'react-router-dom';

const Item = ({ item }) => (
  <Link to={`/products/${item.id}`} className="list-item">
    <img src={item.image} alt="Foto" />
    <div className="list-item-box">
      <span>{item.title}</span>
    </div>
  </Link>
);

export default Item;
