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
       const {getPerson, getStarShip, getImagePerson, getImageStarship} = this.swapiService
       const peopleDetail = (
           <ItemDetails
            itemId={15}  
            getItem={getPerson}
            getImageUrl={getImagePerson} >
                <Record field='gender' label='Gender :'/>
                <Record field='birthYear' label='Birth Year :' />
                <Record field='eyeColor' label='Eye Color :' />
            </ItemDetails>
       )

       const starshipDetail = (
        <ItemDetails 
        itemId={9} 
        getItem={getStarShip}
        getImageUrl={getImageStarship}
         >
            <Record field='model' label='Model :'/>
            <Record field='passengers' label='Passengers :' />
            <Record field='costInCredits' label='Cost in credits :' />     
        </ItemDetails>
    )
    return (
        <div>
            <Header />

            {/* <RowElement left={peopleDetail} right={starshipDetail} /> */}
            <RandomPlanet />
            <PeoplePage />



            <div className="row mb2">
                <div className="list-items col-md-6">
                    
                    <ListItems onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPlanets} 
                    renderItem={(item) => item.name} />
                    
                </div>
                <div className="col-md-6">
                    {/* {peopleDetail} */}
                    {/* <PersonDetails personId={this.state.personSelected} /> */}
                </div>
            </div>

            <div className="row mb2">
                <div className="list-items col-md-6">
                    <ListItems onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllStarShips}
                    renderItem={({name}) => <span> {name} <button>!</button></span>} />
                </div>
                <div className="col-md-6">
                    {/* {starshipDetail} */}
                    {/* <PersonDetails personId={this.state.personSelected} /> */}
                </div>
            </div> 
          
        </div>
    )
   }
}
