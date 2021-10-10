import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { genre_onload } from "../../redux/actions/actions";

export default function Genre() {
    const dispatch = useDispatch()
  async function getGenre() {
    const response = await fetch("http://localhost:8080/api/genre");
    const data = await response.json();
    dispatch(genre_onload(data))
  }
  const genre = useSelector(state => state.genre)
  useEffect(() => {
    getGenre();
  }, []);
  return (
  <div className="row">
      {genre?.map(genre => 
          <div key={genre.type} className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{genre.type}</span>
              </div>
              <div className="card-action">
                <a href="#">Перейти к книгам этого жанра</a>
              </div>
            </div>
          </div>
        )}
  </div>
  )
}
