import React from 'react'
import { SwapiServiceConsumer } from '../swapi-context/'

const WithSwapiServise = (Wrapped, mapMetodsToProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const servisProps =  mapMetodsToProps(swapiService)
                        return (
                            <Wrapped {...props} {...servisProps} />
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
        
    }

    export default WithSwapiServise
