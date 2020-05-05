import React, {Component} from 'react'
import './RandomPlanet.css'

export default class RandomPlanet extends Component {

    render() {
        return(
            <div className="random-planet jumbotron rounded">
                <img className="planet-image" src="#"/>
                <div>
                    <h4>Planet Name</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>1234567</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>43</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>123</span>
                        </li>
                    </ul>
                </div>
            
            
            </div>
        )
    }
}