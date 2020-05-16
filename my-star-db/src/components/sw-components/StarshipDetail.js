import React from 'react'
import ItemDetails, {Record} from '../item-details'
import { SwapiServiceConsumer } from '../swapi-context'

const StarshipDetail = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {   
                ({ getStarShip, getImageStarship }) => {
                    return (
                        <ItemDetails 
                        itemId={ itemId } 
                        getItem={ getStarShip }
                        getImageUrl={ getImageStarship }
                        >
                            <Record field='model' label='Model :'/>
                            <Record field='passengers' label='Passengers :' />
                            <Record field='costInCredits' label='Cost in credits :' />     
                        </ItemDetails>
                    )
                }
            }    
        </SwapiServiceConsumer>
    )
}

export default StarshipDetail
