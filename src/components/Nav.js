import React from 'react';
import './nav.css';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
      <nav>
          <ul>
              <li>
                  <Link to='/' >To Do</Link>
              </li>
              <li>
                  <Link to='/about'>About</Link>
              </li>
          </ul>
    </nav>
  )
}
