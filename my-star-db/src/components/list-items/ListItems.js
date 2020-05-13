import React, {Component} from 'react'
import Loader from '../loader'
import './ListItems.css'
import SwapiService from '../../service/swapi-service'

const ListItems = (props) => {

        const { data, onItemSelected, renderItem } = props
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
// }

const withData = (Wiev) => {
    return class extends Component {
         
    state = {
        data: null
    }

    componentDidMount() {

        const {getData} = this.props
        
        getData().then((data) => {
            this.setState({data})
        })
    }
        
    render() {

        const {data} = this.state

        if(!data) {
            return (
                <Loader />
            )
        }
        return <Wiev {...this.props} data={data} />
    }
    }
}

export default withData(ListItems)

