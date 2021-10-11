import React from "react";
import {NavLink} from 'react-router-dom';

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
          <NavLink to="#">Купить</NavLink>
          <NavLink to="#">В корзину</NavLink>
        </div>
      </div>
    </div>
  );
}
