import React, {Component} from 'react'
import Loader from '../loader'


const WithData = (Wiev) => {
    return class extends Component {
         
    state = {
        data: null
    }

    componentDidMount() {
        
        this.props.getData().then((data) => {
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
 