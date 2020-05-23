import React, {Component} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import './App.css'
import ErrorMessage from '../error-message'
import ErrorBoundary from '../error-boundary'
import SwapiService from '../../service/swapi-service'
import DummiSwapiService from '../../service/dummi-swapi-service'
import { SwapiServiceProvider } from '../swapi-context'
import { PeoplePage, PlanetPage, StarshipPage } from '../item-pages'
import { BrowserRouter as Router, Route} from 'react-router-dom'

export default class App extends Component {

    state={
       hasError: false,
       swapiService: new SwapiService()
    }

    componentDidCatch() {
        this.setState({ hasError:true })
    }

    onChangeApi = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummiSwapiService : SwapiService
            return {
                    swapiService: new Service()
                }
            })
    }

   render(){
       if(this.state.hasError){
           return(
               <ErrorMessage />
           )
       }

    return (
        <div>
            <ErrorBoundary>
                <SwapiServiceProvider value={ this.state.swapiService }>
                    <Router>
                    <Header onChangeApi={ this.onChangeApi } />
                    <RandomPlanet  />
                    <Route path="/people" component={ PeoplePage } />
                    <Route path="/planet" component={ PlanetPage } />
                    <Route path="/Starship" component={ StarshipPage } />
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>

        </div>
    )
   }
}
