import React from 'react'
import './Header.css'

const Header = () => {

    return (
        <div className="d-flex">
            <h3>
                <a href="#">
                    Star DB
                </a>
            </h3>

            <ul>
                <li>
                    <a href="//#region ">People</a>
                </li>
                <li>
                    <a href="//#region ">Planets</a>
                </li>
                <li>
                    <a href="//#region ">Starsips</a>
                </li>
            </ul>

        </div>
    )
}

export default Header

