import "./ButtonBack.css";
import { Link } from "react-router-dom";

const ButtonBack = () => (
  <div className="back-button">
    <Link to="/">Volver</Link>
  </div>
);

export default ButtonBack;