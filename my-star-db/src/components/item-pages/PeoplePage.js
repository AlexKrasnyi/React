import React, { Component } from 'react'
import RowElement from '../row-element'
import { PeopleList, PersonDetail } from '../sw-components'

export default class PeoplePage extends Component {
    state = {
        personSelected: null
    }

    onPersonSelected = (id) => {
        this.setState({personSelected: id})
    }

    render() {

        return (
        <RowElement 
                    left={
                        <PeopleList onItemSelected={this.onPersonSelected} />
                            
                    } 
                    right={<PersonDetail itemId={this.state.personSelected} />} />
        )
    }
}