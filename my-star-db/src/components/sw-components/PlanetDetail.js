import React, {Component} from 'react'
import ItemDetails, {Record} from '../person-details'
import { SwapiServiceConsumer } from '../swapi-context'

const PlanetDetail = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPlanet, getImagePlanet }) => {
                    return (
                        <ItemDetails 
                        itemId={ itemId } 
                        getItem={ getPlanet }
                        getImageUrl={ getImagePlanet }
                         >
                            <Record field='population' label='Population :'/>
                            <Record field='rotationPeriod' label='Rotation Period :' />
                            <Record field='diameter' label='Diameter :' />     
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}

export default PlanetDetail
