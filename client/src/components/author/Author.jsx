import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { author_onload } from '../../redux/actions/actions';

export default function Author() {
    const dispatch = useDispatch();
    const author = useSelector(state => state.author);
    
    
    useEffect(()=> {
      async function getAuthor() {
          const response = await fetch('http://localhost:8080/api/author');
          const data = await response.json();
          dispatch(author_onload(data))
      }
        getAuthor()
    }, [dispatch])
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
                <NavLink to="#">Перейти к книгам этого автора</NavLink>
              </div>
            </div>
          </div>
        )}
  </div>
    )
}
