import React, { useState } from "react";
import ModalAdminPanel from "../modal/ModalAddBook/ModalAddBook";
import ModalDeleteBook from "../modal/ModalDeleteBook/ModalDeleteBook";

export default function AdminPanel() {
  const [showModalAddBook, setShowModalAddBook] = useState("");
  function handlerModalForm(target) {
    if (target === "add-book") {
      setShowModalAddBook("add-book");
    } else if (target === "delete-book") {
      setShowModalAddBook("delete-book");
    } else {
      setShowModalAddBook("");
    }
  }

  return (
    <div className="container center-align">
      <div
        onClick={(e) => {
          handlerModalForm(e.target.dataset.modal);
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
