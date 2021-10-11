import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { genre_onload } from "../../redux/actions/actions";
import {NavLink} from 'react-router-dom';

export default function Genre() {
    const dispatch = useDispatch()
    const genre = useSelector(state => state.genre)
    useEffect(() => {
    async function getGenre() {
      const response = await fetch("http://localhost:8080/api/genre");
      const data = await response.json();
      dispatch(genre_onload(data))
    }
    getGenre();
  }, [dispatch]);
  return (
  <div className="row">
      {genre?.map(genre => 
          <div key={genre.type} className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{genre.type}</span>
              </div>
              <div className="card-action">
                <NavLink to="#">Перейти к книгам этого жанра</NavLink>
              </div>
            </div>
          </div>
        )}
  </div>
  )
}
