import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({onChangeApi}) => {

    return (
        <div className="d-flex header">
            <h3>
                <Link to="/">Star DB</Link>
            </h3>

            <ul className="d-flex">
                <li>
                    <Link to="/people/">People</Link>
                </li>
                <li>
                    <Link to="/planets/">Planets</Link>
                </li>
                <li>
                    <Link to="/starships/">Starsips</Link>
                </li>
                <li>
                    <Link to="/secret">Secret Page</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>

            <button 
            className="btn btn-primary btn-sm"
            onClick={onChangeApi}
            >Change API</button>

        </div>
    )
}

export default Header

