import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";

function CardItem({ src, text, label, path }) {
  return (
    <li className="cardItem">
      <Link className="cardItem__link" to={path}>
        <figure className="cardItem__picWrap" data-category={label}>
          <img src={src} className="cardItem__image" alt="travel image" />
        </figure>
        <div className="cardItem__info">
          <h5 className="cardItem__text">{text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
