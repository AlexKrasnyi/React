import React, {Component} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ListItems from '../list-items'
// import PersonDetails from '../person-details'
import './App.css'
import PeoplePage from '../people-page/PeoplePage'
import ErrorMessage from '../error-message'
import SwapiService from '../../service/swapi-service'
import RowElement from '../row-element'
import ItemDetails, {Record} from '../person-details/ItemDetails'
import WithData from '../hoc-helper'

import { PeopleList, 
    PlanetList, 
    StarshipList, 
    PersonDetail, 
    PlanetDetail, 
    StarshipDetail } from '../sw-components/'


export default class App extends Component {

    swapiService= new SwapiService()

    state={
       hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError:true })
    }

   render(){
       if(this.state.hasError){
           return(
               <ErrorMessage />
           )
       }

    return (
        <div>
            <Header />

           
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

        </div>
    )
   }
}
