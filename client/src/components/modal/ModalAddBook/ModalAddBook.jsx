import React, { useState } from "react";
import {useSelector} from 'react-redux';
import { pushBook } from "../../../API/methods";
import "./ModalAdminPanel.scss";

export default function ModalAdminPanel({ show, setShow, options }) {

  function formSubmit(e) {
    e.preventDefault();
    pushBook({book_id, title,isbn, description, price})
  }
  const book_id = useSelector(state => state.books.length + 1);
  const [ title , setTitle] = useState('')
  const [isbn, setIsbn] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  return (
    <div
      onClick={() => setShow(false)}
      className={show ? "modal active" : "modal"}
    >
      <div onClick={(e) => e.stopPropagation()} className="modal__content">
        <form onSubmit={formSubmit}>
          <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" id="book-name" />
          <label htmlFor="book-name">Название книги</label>
          <input value={isbn} onChange={(e)=> setIsbn(e.target.value)} type="text" id="book-isbn" />
          <label htmlFor="book-isbn">ISBN книги</label>
          <input value={description} onChange={(e)=> setDescription(e.target.value)} type="text" id="book-description" />
          <label htmlFor="book-description">Описание книги</label>
          <input value={price} onChange={(e)=> setPrice(e.target.value)} type="text" id="book-description" />
          <label htmlFor="book-description">Цена книги</label>
          <br />
          <button
            className="waves-effect waves-light btn"
            onClick={()=> setShow(false)}>
            Добавить
          </button>
          <button className="waves-effect waves-light btn">Отменить</button>
        </form>
      </div>
    </div>
  );
}
