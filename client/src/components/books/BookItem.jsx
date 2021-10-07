import React from "react";

export default function BookItem({ book }) {
  return (
    <div className="col s6 m3">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{book.title}</span>
          <p>{book.description}</p>
        </div>
        <div className="card-action">
          <a href="#">Купить</a>
          <a href="#">В корзину</a>
        </div>
      </div>
    </div>
  );
}
