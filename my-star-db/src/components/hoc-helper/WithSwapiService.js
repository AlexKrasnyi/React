import React from 'react'
import {SwapiServiseConsumer} from '../swapi-context'

const WithSwapiServise = (Wrapped) => {
    return (
    <SwapiServiseConsumer>
        {
        (props) =>  <Wrapped props={...props} />
        }
    </SwapiServiseConsumer>
    )
    }
