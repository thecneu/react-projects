import React from 'react'
import { Link } from 'react-router'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to="/">Add</Link></li>
                <li><Link to="/list">List</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header
