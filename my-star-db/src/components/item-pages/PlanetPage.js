import React, { Component } from 'react'
import RowElement from '../row-element'
import { PlanetList, PlanetDetail } from '../sw-components'

export default class PlanetPage extends Component {
    state = {
        personSelected: null
    }

    onPersonSelected= (id) => {
        this.setState( {personSelected: id} )
    }

    render() {
        return (
            <RowElement 
                    left={
                        <PlanetList onItemSelected={this.onPersonSelected} />
                            
                    } 
                    right={<PlanetDetail itemId={this.state.personSelected} />} />
        )
    }
}