import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { author_onload } from '../../redux/actions/actions';

export default function Author() {
    const dispatch = useDispatch();
    const author = useSelector(state => state.author);
    
    async function getAuthor() {
        const response = await fetch('http://localhost:8080/api/author');
        const data = await response.json();
        dispatch(author_onload(data))
    }

    useEffect(()=> {
        getAuthor()
    }, [])
    return (
        <div className="row">
      {author?.map(author => 
          <div key={author.author_id} className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{author.first_name}</span>
                <span className="card-title">{author.last_name}</span>
              </div>
              <div className="card-action">
                <a href="#">Перейти к книгам этого автора</a>
              </div>
            </div>
          </div>
        )}
  </div>
    )
}
