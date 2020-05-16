import React from 'react'
import ItemDetails, {Record} from '../item-details'
import { WithSwapiService } from '../hoc-helper'


const PlanetDetail = ( props ) => {
    return (
        <ItemDetails {...props}>
            <Record field='population' label='Population :'/>
            <Record field='rotationPeriod' label='Rotation Period :' />
            <Record field='diameter' label='Diameter :' />     
        </ItemDetails>
    )
}

const mapMetodsToProps = (swapiService) => {
    return {
        getItem: swapiService.getPlanet,
        getImageUrl: swapiService.getImagePlanet
    }
}

export default WithSwapiService(PlanetDetail, mapMetodsToProps)
