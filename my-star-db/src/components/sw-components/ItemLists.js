import React from 'react'
import ListItems from '../list-items'
import WithData, { WithSwapiService, withChildFunc } from '../hoc-helper'

// import SwapiService from '../../service/swapi-service'


// // const swapiService = new SwapiService()

// // const { getAllPeople, getAllPlanets, getAllStarShips} = swapiService



const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({ name, model }) => <span>{name} ({model})</span>

const mapPersonMetodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}
const mapPlanetsMetodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}
const mapStarshipsMetodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarShips
    }
}

const PeopleList = WithSwapiService(
    WithData(withChildFunc(ListItems, renderName)),
        mapPersonMetodsToProps)

const PlanetList = WithSwapiService(
    WithData(withChildFunc(ListItems, renderName)), 
        mapPlanetsMetodsToProps)

const StarshipList = WithSwapiService(
    WithData(withChildFunc(ListItems, renderModelAndName)), 
        mapStarshipsMetodsToProps)

export { PeopleList, PlanetList, StarshipList }