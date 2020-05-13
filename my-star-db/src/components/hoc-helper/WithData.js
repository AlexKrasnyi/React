import React, {Component} from 'react'
import Loader from '../loader'


const WithData = (Wiev, getData) => {
    return class extends Component {
         
    state = {
        data: null
    }

    componentDidMount() {
        
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


export default WithData
 