import React from 'react'
import ItemDetails, {Record} from '../item-details/index'
import { WithSwapiService } from '../hoc-helper'

    const PersonDetail = (props) => {
// const PersonDetail = ({itemId, getItem, getImageUrl}) => {
    return (
        <ItemDetails {...props}>
        {/*  itemId={ itemId }  
         getItem={ getItem }
         getImageUrl={ getImageUrl }  */}
            <Record field='gender' label='Gender :'/>
            <Record field='birthYear' label='Birth Year :' />
            <Record field='eyeColor' label='Eye Color :' />
        </ItemDetails>
    )
}

const mapMetodsToProps = (swapiService) => {
    return {
        getItem: swapiService.getPerson,
        getImageUrl: swapiService.getImagePerson
    }
}

export default WithSwapiService(PersonDetail, mapMetodsToProps)
