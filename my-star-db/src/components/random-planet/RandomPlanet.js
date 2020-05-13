import React, {Component} from 'react'
import Loader from '../loader'
import ErrorMessage from '../error-message'
import './RandomPlanet.css'
import SwapiServise from '../../service/swapi-service'

export default class RandomPlanet extends Component {
     swapiServis = new SwapiServise()

    state ={
        planet: {},
        loading: true
    }

    componentDidMount() {
        this.interval = setInterval(this.updatePlanet, 4000)
        // clearInterval(this.interval)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) =>{
        this.setState({
            planet,
            loading: false,
            error: false
            
        })
    }
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor((Math.random()* 17 + 2))
        
        this.swapiServis.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)   
    }

    

    render() {

        const {planet, loading, error} = this.state
        
        const hasData = !(loading || error)
        
        
        const err = error? <ErrorMessage /> : null
        const load = loading  ? <Loader /> : null
        const content = hasData ? < PlanetData planet={planet} /> : null

        return(
            <div className="random-planet jumbotron rounded">
               {load}
               {content}
                {err}
            </div>
        )
    }
}

const PlanetData = ({planet}) => {

    const {id, name, population, rotationPeriod, diametr} = planet
    return (
        <React.Fragment>
              <img className="planet-image" src={`https://starwars-visualguide.com//assets/img/planets/${id}.jpg`} alt="planet-img" />
                <div>
                    <h4>{name} {id}</h4>
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