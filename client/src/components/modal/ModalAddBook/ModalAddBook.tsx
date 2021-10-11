import React, { useState } from "react";
import {useSelector} from 'react-redux';
import { pushBook } from "../../../API/methods";
import { InitialInterface } from "../../../redux/types/types";
import "./ModalAdminPanel.scss";

interface IAdminProps {
  show: string;
  setShow: (boolean: string)=> void ;
}

export const ModalAdminPanel: React.FC<IAdminProps> = ({ show, setShow }) => {

  function formSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    pushBook({book_id, title,isbn, description, price})
  }
  const book_id = useSelector<InitialInterface>(state => state.books.length + 1);
  const [ title , setTitle] = useState('')
  const [isbn, setIsbn] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  return (
    <div
      onClick={() => setShow('')}
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
            onClick={()=> setShow('')}>
            Добавить
          </button>
          <button className="waves-effect waves-light btn">Отменить</button>
        </form>
      </div>
    </div>
  );
}
