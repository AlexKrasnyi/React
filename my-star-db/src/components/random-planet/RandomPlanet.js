import React, {Component} from 'react'
import Loader from '../loader'
import './RandomPlanet.css'
import SwapiServise from '../../service/swapi-service'

export default class RandomPlanet extends Component {
     swapiServis = new SwapiServise()

    state ={
        planet:{},
        loading: true
    }
    constructor() {
        super()
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) =>{
        this.setState({
            planet,
            loading: false
        })
    }

    updatePlanet(){
        const id = Math.floor(Math.random() * 17 + 2)
        
        this.swapiServis.getPlanet(id)
        .then(this.onPlanetLoaded)    
    }

    render() {

        // return (
        //     <Loader />
        // )

        const {planet:{id, name, population, rotationPeriod, diametr}} = this.state
        return(
            <div className="random-planet jumbotron rounded">
                <img className="planet-image" src={`https://starwars-visualguide.com//assets/img/planets/${id}.jpg`} />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population: </span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period: </span>
                            <span>{ rotationPeriod }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter: </span>
                            <span>{diametr}</span>
                        </li>
                    </ul>
                </div>
            
            
            </div>
        )
    }
}

const PlanetData = (planet) => {

    const {id, name, population, rotationPeriod, diametr} = this.planet
    return (
        <React.Fragment>
              <img className="planet-image" src={`https://starwars-visualguide.com//assets/img/planets/${id}.jpg`} />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population: </span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period: </span>
                            <span>{ rotationPeriod }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter: </span>
                            <span>{diametr}</span>
                        </li>
                    </ul>
                </div>
            
        </React.Fragment>
    )
}