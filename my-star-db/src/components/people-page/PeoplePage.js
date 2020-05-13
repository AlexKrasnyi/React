import React, {Component} from 'react'
import './PeoplePage.css'
import ListItems from '../list-items'
import PersonDetails from '../person-details'
import RowElement from '../row-element'
import SwapiService from '../../service/swapi-service'
import ErrorBoundary from '../error-boundary'

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state= {
        personSelected: null,
    }
    
    onPersonSelected = (id) => { 
        this.setState({
             personSelected: id
         })
     }

    render() {

        const listItem = (
            <ListItems onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({name, gender, birthYear}) => `${name}  (${gender}  ${birthYear})`} />
         )

         const personDetail = (
            <PersonDetails personId={this.state.personSelected} />              
         )

        return (
            <ErrorBoundary>
                <RowElement left={listItem} right={personDetail} />
            </ErrorBoundary>
        )
    }

}