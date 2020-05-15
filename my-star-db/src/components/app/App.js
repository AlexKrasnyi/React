import React, {Component} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import './App.css'
import ErrorMessage from '../error-message'
import RowElement from '../row-element'
import ErrorBoundary from '../error-boundary'
import SwapiService from '../../service/swapi-service'
import DummiSwapiService from '../../service/dummi-swapi-service'
import { SwapiServiceProvider } from '../swapi-context'
import { PeopleList, 
    PlanetList, 
    StarshipList, 
    PersonDetail, 
    PlanetDetail, 
    StarshipDetail } from '../sw-components/'


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
                    swapiService: new Service
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
                    <Header onChangeApi={this.onChangeApi} />
                    <RandomPlanet />
                    <RowElement 
                    left={
                        <PeopleList onItemSelected={this.onPersonSelected} />
                            
                    } 
                    right={<PersonDetail itemId={11} />} />

                    <RowElement 
                    left={
                        <PlanetList onItemSelected={this.onPersonSelected} />
                            
                    } 
                    right={<PlanetDetail itemId={11} />} />

                    
                    <RowElement 
                    left={
                        <StarshipList onItemSelected={this.onPersonSelected} />
                            
                    } 
                    right={<StarshipDetail itemId={11} />} />
                </SwapiServiceProvider>
            </ErrorBoundary>

        </div>
    )
   }
}
