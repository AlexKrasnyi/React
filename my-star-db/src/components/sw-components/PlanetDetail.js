import React, {Component} from 'react'
import ItemDetails, {Record} from '../person-details'
import { WithSwapiService } from '../hoc-helper'


const PlanetDetail = ({ itemId, swapiService }) => {

    const { getPlanet, getImagePlanet } = swapiService

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

export default WithSwapiService(PlanetDetail)
