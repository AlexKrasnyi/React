import React from 'react'
import './Header.css'

const Header = ({onChangeApi}) => {

    return (
        <div className="d-flex header">
            <h3>
                <a href="//#regiono">
                    Star DB
                </a>
            </h3>

            <ul className="d-flex">
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

            <button 
            className="btn btn-primary btn-sm"
            onClick={onChangeApi}
            >Change API</button>

        </div>
    )
}

export default Header

