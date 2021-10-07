import React from 'react'
import { useSelector } from 'react-redux'
import BookItem from './BookItem'

export default function BooksList() {
    const books = useSelector(state=> state.books)
    return (
        <div className='row'>
            {books.map(book=> 
                <BookItem key={Math.random()*1} book={book}/>
                )}
        </div>
    )
}
