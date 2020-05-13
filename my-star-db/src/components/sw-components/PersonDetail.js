import React, {Component} from 'react'
import ItemDetails, {Record} from '../person-details'
import { SwapiServiceConsumer } from '../swapi-context'

const PersonDetail = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getImagePerson }) => {
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
            }    
        </SwapiServiceConsumer>
    )
}

export default PersonDetail
