import React from 'react'

export default function Navbar() {
    return (
        <nav>
        <div className="nav-wrapper ">
          <a href="#" className="brand-logo">КнигиВики</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Книги</a></li>
            <li><a href="badges.html">Авторы</a></li>
            <li><a href="collapsible.html">Жанры</a></li>
          </ul>
        </div>
      </nav>
    )
}
