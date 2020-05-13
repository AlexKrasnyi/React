import React, {Component} from 'react'
import ListItems from '../list-items'
import WithData from '../hoc-helper'
import SwapiService from '../../service/swapi-service'


const swapiService = new SwapiService()

const { getAllPeople, getAllPlanets, getAllStarShips} = swapiService

const withChildFunc = (Wrapped, func) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {func}
            </Wrapped>
        )
        }
    
}

const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({ name, model }) => <span>{name} ({model})</span>


const PeopleList = WithData(withChildFunc(ListItems, renderName), getAllPeople)

const PlanetList = WithData(withChildFunc(ListItems, renderName), getAllPlanets)

const StarshipList = WithData(withChildFunc(ListItems, renderModelAndName), getAllStarShips)

export { PeopleList, PlanetList, StarshipList }