import React from "react";

export default function BookItem({ book }) {
  return (
    <div className="col s12 m6">
      <div className="card blue-grey darken-1" style={{minHeight: '100%', flexGrow: 1, display: 'flex', flexFlow: 'column', justifyContent: 'space-between'}}>
        <div className="card-content white-text">
          <span className="card-title" >{book.title}</span>
          <p>{book.description}</p>
          <br />
          <p style={{flex: '0 0 auto'}}>isbn {book.isbn}</p>
        </div>
        <div className="card-action">
          <a href="#">Купить</a>
          <a href="#">В корзину</a>
        </div>
      </div>
    </div>
  );
}
