import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
        <div className="nav-wrapper ">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><NavLink to="/admins">Админка</NavLink></li>
          </ul>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/">Книги</NavLink></li>
            <li><NavLink to='/author'>Авторы</NavLink></li>
            <li><NavLink to="/genre">Жанры</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}
