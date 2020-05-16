import React, {Component} from 'react'
import RowElement from '../row-element'
import { StarshipList, StarshipDetail } from '../sw-components'

export default class StarshipPage extends Component {

    state = {
        personSelected: null
    }

    onPersonSelected = (id) => {
        this.setState({ personSelected: id })
    }

    render() {
        return(
            <RowElement 
                    left={
                        <StarshipList onItemSelected={this.onPersonSelected} />
                            
                    } 
                    right={<StarshipDetail itemId={this.state.personSelected} />} />
        )
    }
}