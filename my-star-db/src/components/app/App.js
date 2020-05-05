import React from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ListItems from '../list-items'
import PersonDetails from '../person-details'
import './App.css'

const App = () => {
    return (
        <div>
            <Header />
            <RandomPlanet />

            <div className="row mb2">
                <div className="col-md-6">
                    <ListItems />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    )
}

export default App