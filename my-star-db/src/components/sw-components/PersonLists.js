import React, {Component} from 'react'
import ItemDetails, {Record} from '../person-details'
import SwapiService from '../../service/swapi-service'

const swapiService = new SwapiService()

const { 
    getPerson,
    getPlanet,
    getStarShip,
    getImagePerson,
    getImagePlanet,
    getImageStarship
    } = swapiService



const PersonDetail = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}  
            getItem={getPerson}
            getImageUrl={getImagePerson} >
                <Record field='gender' label='Gender :'/>
                <Record field='birthYear' label='Birth Year :' />
                <Record field='eyeColor' label='Eye Color :' />
            </ItemDetails>
    )
}

const PlanetDetail = ({itemId}) => {
    return (
        <ItemDetails 
        itemId={itemId} 
        getItem={getPlanet}
        getImageUrl={getImagePlanet}
         >
            <Record field='population' label='Population :'/>
            <Record field='rotationPeriod' label='Rotation Period :' />
            <Record field='diameter' label='Diameter :' />     
        </ItemDetails>
    )
}

const StarshipDetail = ({itemId}) => {
    return (
        <ItemDetails 
        itemId={itemId} 
        getItem={getStarShip}
        getImageUrl={getImageStarship}
         >
            <Record field='model' label='Model :'/>
            <Record field='passengers' label='Passengers :' />
            <Record field='costInCredits' label='Cost in credits :' />     
        </ItemDetails>
    )
}

export {
    PersonDetail,
    PlanetDetail,
    StarshipDetail
}
