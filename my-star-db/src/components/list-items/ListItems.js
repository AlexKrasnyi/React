import React, {Component} from 'react'
import Loader from '../loader'
import './ListItems.css'
import SwapiService from '../../service/swapi-service'
import WithData from '../hoc-helper'


const ListItems = (props) => {

        const { data, onItemSelected, renderItem } = props
        console.log(data)
        const peoples = data.map((item) => {
            const {id} = item 
            const label =renderItem(item)
            return (
                <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                    {label}
                </li>
                )
            })
        
        return (
            <ul className="list-items list-group">
                {peoples}
            </ul>
            )
    }


// const withData = (Wiev, getData) => {
//     return class extends Component {
         
//     state = {
//         data: null
//     }

//     componentDidMount() {

//         // const {getData} = this.props
        
//         getData().then((data) => {
//             this.setState({data})
//         })
//     }
        
//     render() {

//         const {data} = this.state

//         if(!data) {
//             return (
//                 <Loader />
//             )
//         }
//         return <Wiev {...this.props} data={data} />
//     }
//     }
// }
 
const {getAllPeople} = new SwapiService()

export default WithData(ListItems, getAllPeople)

