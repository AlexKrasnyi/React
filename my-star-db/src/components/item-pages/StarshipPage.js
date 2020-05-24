import React from 'react'
import { StarshipList } from '../sw-components'
import { withRouter } from 'react-router-dom'

const StarshipPage = ( { history } ) => {
    return <StarshipList onItemSelected={ ( id ) => history.push( id )} />
}

export default withRouter(StarshipPage)

// export default class StarshipPage extends Component {

//     state = {
//         personSelected: null
//     }

//     onPersonSelected = (id) => {
//         this.setState({ personSelected: id })
//     }

//     render() {
//         return(
//             <RowElement 
//                     left={
//                         <StarshipList onItemSelected={this.onPersonSelected} />
                            
//                     } 
//                     right={<StarshipDetail itemId={this.state.personSelected} />} />
//         )
//     }
// }