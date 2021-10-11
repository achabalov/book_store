import React from 'react'
import { useSelector } from 'react-redux';
// import { deleteBook } from '../../../API/methods';
import '../ModalAddBook/ModalAdminPanel.scss'

export default function ModalDeleteBook({setShow, show}) {
    function formSubmit(e) {
        e.preventDefault();
        // deleteBook({book_id, title,isbn, description, price})
      }
      // const book_id = useSelector(state => state.books.length + 1);
      const book = useSelector(state => state.books);
      console.log(book);
      // const [title , setTitle] = useState('')
      // const [isbn, setIsbn] = useState('')
      // const [description, setDescription] = useState('')
      // const [price, setPrice] = useState('')
      return (
        <div
          onClick={() => setShow(false)}
          className={show ? "modal active" : "modal"}
        >
          <div onClick={(e) => e.stopPropagation()} className="modal__content">
            <form onSubmit={formSubmit}>
              <select style={{display: 'block'}}>
                  {book.map(book=> 
                    <option key={Math.random()*1} value={book.title}>{book.title}</option>
                    )}
              </select>
              <br />
              <button
                className="waves-effect waves-light btn"
                onClick={()=> setShow(false)}>
                Добавить
              </button>
              <button className="waves-effect waves-light btn">Удалить</button>
            </form>
          </div>
        </div>
      );
}
