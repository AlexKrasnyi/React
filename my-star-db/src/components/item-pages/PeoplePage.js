import React from 'react'
import { withRouter } from 'react-router-dom'
import RowElement from '../row-element'
import { PeopleList, PersonDetail } from '../sw-components'

const PeoplePage = ({ history, match }) => {
    const { id } = match.params
    return (
                <RowElement 
                            left={
                                <PeopleList onItemSelected={(id) => history.push(id)} />
                                    
                            } 
                            right={<PersonDetail itemId={id} />} />
                )
}

export default withRouter(PeoplePage)

// export default class PeoplePage extends Component {
//     state = {
//         personSelected: null
//     }

//     onPersonSelected = (id) => {
//         this.setState({personSelected: id})
//     }

//     render() {

//         return (
//         <RowElement 
//                     left={
//                         <PeopleList onItemSelected={this.onPersonSelected} />
                            
//                     } 
//                     right={<PersonDetail itemId={this.state.personSelected} />} />
//         )
//     }
// }