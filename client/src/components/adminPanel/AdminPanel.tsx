import React, { useState } from "react";
import {ModalAdminPanel} from "../modal/ModalAddBook/ModalAddBook";
import ModalDeleteBook from "../modal/ModalDeleteBook/ModalDeleteBook";

export const AdminPanel = () => {
  const [showModalAddBook, setShowModalAddBook] = useState<string>("");
  const handlerModalForm = (e: any) => {
    if (e.target.dataset.modal === "add-book") {
      setShowModalAddBook("add-book");
    } else if (e.target.dataset.modal  === "delete-book") {
      setShowModalAddBook("delete-book");
    } else {
      setShowModalAddBook('');
    }
  }

  return (
    <div className="container center-align">
      <div
        onClick={(e: React.MouseEvent<HTMLInputElement>) => {
          handlerModalForm(e);
        }}
      >
        <button data-modal="add-book" className="waves-effect waves-light btn">
          Добавить книгу
        </button>
        <button
          data-modal="add-author"
          className="waves-effect waves-light btn"
        >
          Добавить автора
        </button>
        <button className="waves-effect waves-light btn">Добавить жанр</button>
        <button data-modal='delete-book' className="waves-effect waves-light btn">Удалить книгу</button>
        <button className="waves-effect waves-light btn">Удалить автора</button>
        <button className="waves-effect waves-light btn">Удалить жанр</button>
      </div>

       {showModalAddBook === "add-book" ? (
        <ModalAdminPanel
          show={showModalAddBook}
          setShow={setShowModalAddBook}
        />
      ) : showModalAddBook === "delete-book" ? (
        <ModalDeleteBook
          show={showModalAddBook}
          setShow={setShowModalAddBook}
        />
      ) : (
        ""
      )} 
    </div>
  );
}
