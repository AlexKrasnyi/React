import React, {Component} from 'react'
import Loader from '../loader'
import './ListItems.css'
import SwapiService from '../../service/swapi-service'

class ListItems extends Component {

    
    // state = {
    //     allItems: null
    // }

    // componentDidMount() {

    //     const {getData} = this.props
        
    //     getData().then((allItems) => {
    //         this.setState({allItems})
    //     })
    // }

     renderPeople (arr){
         
        return  arr.map((item) => {
            const {id} = item
            
            const label = this.props.renderItem(item)
            return (
                <li className="list-group-item"
                key={id}
                onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        // const {allItems} = this.state

        // if(!allItems) {
        //     return (
        //         <Loader />
        //     )
        // }
        const { data } = this.props
        const peoples = this.renderPeople(data)
        
        return (
            <ul className="list-items list-group">
                {peoples}
            </ul>
        )
    }
}

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

