import React, {Component} from 'react'
import ItemDetails, {Record} from '../person-details'
import { WithSwapiService } from '../hoc-helper'

const PersonDetail = ({itemId, swapiService}) => {

    const { getPerson, getImagePerson } = swapiService

    return (
        <ItemDetails
        itemId={ itemId }  
        getItem={ getPerson }
        getImageUrl={ getImagePerson } >
            <Record field='gender' label='Gender :'/>
            <Record field='birthYear' label='Birth Year :' />
            <Record field='eyeColor' label='Eye Color :' />
        </ItemDetails>
    )
}

export default WithSwapiService(PersonDetail)
